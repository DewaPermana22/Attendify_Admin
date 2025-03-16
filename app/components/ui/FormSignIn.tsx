"use client";
import React, { useState } from "react";
import { Label } from "flowbite-react";
import InputComponent from "../Atoms/InputComponent";
import { LuCircleUserRound } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { RiShieldKeyholeLine } from "react-icons/ri";
import LinkText from "../Atoms/LinkText";
import CheckBox from "../Atoms/checkBox";
import ButtonComponent from "../Atoms/Button";
import { FaGoogle } from "react-icons/fa6";
import OTPModal from "./ModalsOTP";
import { sendOTP } from "@/app/server/Hooks/useOtpAuth";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export function FormSignIn() {
    const [isOTPVisible, setOTPVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("⏳ handleLogin dipanggil!");
        
        setError("");
    
        console.log("📨 Mengirim request login ke NextAuth...");
        
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email: email,
                password: password,
            });
    
            console.log("✅ Hasil SignIn:", result);
    
            if (result?.error) {
                console.log("❌ Login gagal:", result.error);
                setError("Email atau password salah!");
            } else {
                console.log("🎉 Login sukses! Redirecting...");
                alert("Login Berhasil!");
                router.push("/Pages/Main");
            }
        } catch (err) {
            console.log("❌ Terjadi error:", err);
            setError("Terjadi kesalahan saat login!");
        }
    };
    
    

    const toggleOTPModal = async () => {
        setOTPVisible(true);

        // Kirim email ke backend
        const send = await sendOTP({
            email : email,
            companyName : "Attendify"
        });
    };


    return (
        <form onSubmit={handleLogin} className="flex max-w-lg flex-col gap-3">
            <InputComponent type="text" placeholder={"Enter Your Name"} icon={LuCircleUserRound} label='Nama' />
            <InputComponent onchange={(e : any) => setEmail(e.target.value)} type="email" placeholder={"email@example.com"} icon={MdOutlineAlternateEmail} label='Email' />
            <InputComponent onchange={(e : any) => setPassword(e.target.value)} type="password" placeholder={"Enter Password"} icon={RiShieldKeyholeLine} label='Password' />
            <InputComponent type="password" placeholder={"Confirm Password"} label='Confirm Password' />

            <div className="flex items-center mt-4 gap-2">
                <CheckBox id="agree" />
                <Label style={{ fontFamily: "'Inter', sans-serif" }} htmlFor="agree" className="flex">
                    I agree with the&nbsp;
                    <LinkText text="terms and conditions" />
                </Label>
            </div>

            {/* Tombol Login akan membuka modal OTP */}
            <ButtonComponent className="justify-center py-4" type="submit" color={"Primary"} text={"Login"} />
            <ButtonComponent className="justify-center py-4" color={"Primary"} icon={FaGoogle} text={"Continue with Google"} clicked={() => signIn("google")} />

            <div className="flex mt-3 items-center justify-between">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[16px] font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?&nbsp;
                    <LinkText text="Sign Up" />
                </p>
                <LinkText text="Forgot password?" />
            </div>

            {isOTPVisible && <OTPModal 
            email={email} onVerifySuccess={() => setOTPVisible(false)} 
            isOpen={isOTPVisible} onClose={() => setOTPVisible(false)} />}
        </form>
    );
}
