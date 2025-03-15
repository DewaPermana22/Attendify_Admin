import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import React from 'react';
import crypto from 'crypto';
import {saveOTP, verifiyOTP} from '../../libs/db';
import { OtpEmailTemplate, OtpEmailTemplateProps } from '../../components/emailotp';

interface OtpRequestData {
  email: string;
  otp?: string;
  recipientName?: string;
  companyName?: string;
  type?: string
}

export async function POST(req: Request) {
    try {
        // Menggunakan as OtpRequestData untuk type casting
        const { email, otp, recipientName, companyName, type } = await req.json() as OtpRequestData;
        
        
        if (!email) {
            return Response.json({
                success: false,
                message: "Email penerima diperlukan"
            }, { status: 400 });
        }
        
        if (type === "send") {
            const otp_code = crypto.randomInt(100000, 999999).toString();
            await saveOTP(email, otp_code);
            const emailProps: OtpEmailTemplateProps = {
                otp: otp_code,
                recipientName: recipientName || 'Pengguna',
                companyName: companyName || 'Aplikasi Kami',
                expiryMinutes: 15
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
            return Response.json({ success: true, message: "Email OTP berhasil dikirim." }, { status: 200 });
        }
        
        
        //Verivication
        if (type === "verify") {
            await verifiyOTP(email, otp || "");
            return Response.json({ success: true, message: "Email OTP berhasil diverifikasi." }), { status: 200 };
        }
        
        return Response.json({ success: false, message: "Tipe OTP tidak valid." }, { status: 400 });
        
    } catch (error) {
        console.error("Error sending email:", error);
        return Response.json({ 
            success: false, 
            message: "Gagal mengirim email OTP.",
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}