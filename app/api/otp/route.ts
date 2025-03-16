import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import React from 'react';
import crypto from 'crypto';
import { NextResponse } from 'next/server';
import { dbConnect } from '../../libs/mongodb';
import { OtpEmailTemplate, OtpEmailTemplateProps } from '../../components/emailotp';
import otpModels from '@/app/server/models/otpModels';

interface OtpRequestData {
  email: string;
  otp?: string;
  recipientName?: string;
  companyName?: string;
  type?: "send" | "verify";
}

export async function POST(req: Request) {
    try {

        const body = await req.text();
        if (!req.body) {
            return Response.json({ success: false, message: "Request body tidak boleh kosong" }, { status: 400 });
        }

        const { email, otp, recipientName, companyName, type } = JSON.parse(body) as OtpRequestData;
        
        if (!email) {
            return NextResponse.json({ success: false, message: "Email penerima diperlukan" }, { status: 400 });
        }


        await dbConnect();

        // kirim OTP
        if (type === "send") {
            const otp_code = crypto.randomInt(100000, 999999).toString();
            const hashedOTP = crypto.createHash('sha256').update(otp_code).digest('hex');
            const expires = new Date(Date.now() + 5 * 60000); // 5 menit

            await otpModels.create({
                email,
                otp: hashedOTP,
                expiresAt: expires
            });

            const emailProps: OtpEmailTemplateProps = {
                otp: otp_code,
                recipientName: recipientName || 'Pengguna',
                companyName: companyName || 'Aplikasi Kami',
                expiryMinutes: 5
            };

            const emailHtml = await render(React.createElement(OtpEmailTemplate, emailProps));

            const transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: email,
                subject: `Kode OTP Verifikasi - ${companyName || 'Aplikasi Kami'}`,
                html: emailHtml,
            };
            
            await transporter.sendMail(mailOptions);
            return NextResponse.json({ success: true, message: "Email OTP berhasil dikirim." }, { status: 200 });
        }
        
        // verfikasi OTP
        if (type === "verify") {
            if (!otp) {
                return NextResponse.json({ success: false, message: "OTP diperlukan." }, { status: 400 });
            }

            const valid = await otpModels.findOne({ email });

            if (!valid) {
                return NextResponse.json({ success: false, message: "OTP tidak ditemukan." }, { status: 400 });
            }

            if (valid.expiresAt < new Date()) {
                await otpModels.deleteOne({ email }); // Hapus OTP yang expired
                return NextResponse.json({ success: false, message: "OTP sudah kedaluwarsa." }, { status: 400 });
            }

            // Bandingkan dengan OTP yang sudah di-hash
            const validHashedOTP = crypto.createHash('sha256').update(otp).digest('hex');
            if (validHashedOTP !== valid.otp) {
                return NextResponse.json({ success: false, message: "Kode OTP tidak cocok." }, { status: 400 });
            }

            // Hapus OTP setelah verifikasi sukses
            await otpModels.deleteOne({ email });

            return NextResponse.json({ success: true, message: "Email OTP berhasil diverifikasi." }, { status: 200 });
        }

        return NextResponse.json({ success: false, message: "Tipe OTP tidak valid." }, { status: 400 });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ 
            success: false, 
            message: "Gagal mengirim email OTP.",
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}
