"use client";
import { useState } from "react";
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

export function FormSignIn() {
    const [isOTPVisible, setOTPVisible] = useState(false);

    // Fungsi untuk menampilkan modal OTP
    const toggleOTPModal = () => {
        setOTPVisible(true);
    };

    return (
        <form className="flex max-w-lg flex-col gap-3">
            <InputComponent type="text" placeholder={"Enter Your Name"} icon={LuCircleUserRound} label='Nama' />
            <InputComponent type="email" placeholder={"email@example.com"} icon={MdOutlineAlternateEmail} label='Email' />
            <InputComponent type="password" placeholder={"Enter Password"} icon={RiShieldKeyholeLine} label='Password' />
            <InputComponent type="password" placeholder={"Confirm Password"} label='Confirm Password' />

            <div className="flex items-center mt-4 gap-2">
                <CheckBox id="agree" />
                <Label style={{ fontFamily: "'Inter', sans-serif" }} htmlFor="agree" className="flex">
                    I agree with the&nbsp;
                    <LinkText text="terms and conditions" />
                </Label>
            </div>

            {/* Tombol Login akan membuka modal OTP */}
            <ButtonComponent className="justify-center py-4" color={"Primary"} text={"Login"} clicked={toggleOTPModal} />
            <ButtonComponent className="justify-center py-4" color={"Primary"} icon={FaGoogle} text={"Continue with Google"} clicked={() => alert('hello')} />

            <div className="flex mt-3 items-center justify-between">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[16px] font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?&nbsp;
                    <LinkText text="Sign Up" />
                </p>
                <LinkText text="Forgot password?" />
            </div>

            {/* Modal OTP akan muncul hanya jika isOTPVisible = true */}
            {isOTPVisible && <OTPModal isOpen={isOTPVisible} onClose={() => setOTPVisible(false)} />}
        </form>
    );
}
