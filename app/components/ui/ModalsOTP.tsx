"use client";

import TextComponent from '@/app/components/Atoms/Text';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { verifyOTP } from '@/app/server/Hooks/useOtpAuth';

interface OTPModalProps {
  isOpen: boolean;
  onClose: () => void;
  email : string
  onVerifySuccess: () => void;
}

const OTPModal: React.FC<OTPModalProps> = ({ isOpen, onClose, email, onVerifySuccess }) => {
  const [otp, setOtp] = useState(Array(6).fill(''));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [countdown, setCountdown] = useState(60);
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [error, setError] = useState('');

  const verify = async () => {
    
  }

  useEffect(() => {
    if (isOpen) {
      setOtp(Array(6).fill(''));
      setCountdown(60);
      setIsResendDisabled(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (countdown > 0 && isResendDisabled) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else if (countdown === 0) {
      setIsResendDisabled(false);
    }
  }, [countdown, isResendDisabled]);

  const handleChange = (index: number, value: string) => {
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value.substring(0, 1);
      setOtp(newOtp);
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/[^0-9]/g, '').substring(0, 6);
    if (pastedData) {
      const newOtp = [...otp];
      for (let i = 0; i < pastedData.length; i++) {
        if (i < 6) {
          newOtp[i] = pastedData[i];
        }
      }
      setOtp(newOtp);
      inputRefs.current[pastedData.length < 6 ? pastedData.length : 5]?.focus();
    }
  };

  const handleResendOtp = () => {
    setCountdown(60);
    setIsResendDisabled(true);
  };

  const handleVerify = async() => {
    try {
      const otpValue = otp.join('');
      const res = await verifyOTP(email, otpValue);
      if (res.succes) {
        onVerifySuccess();
        onClose();
      } else {
        setError(res.message);
      }
    } catch (error) {
      setError('Terjadi kesalahan saat memverifikasi OTP.');
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="flex flex-col w-full max-w-md bg-white dark:bg-darkCard p-10 rounded-2xl shadow-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <Image src="/Logo.svg" alt="Attendify Logo" width={40} height={40} className="mr-2" />
            <TextComponent text="Attendify" type="subtitle" className="text-text dark:text-textDark" />
          </div>
          <button onClick={onClose} className="text-gray-600 dark:text-gray-400 hover:text-gray-800">✕</button>
        </div>

        <TextComponent text="Verification Code" type="title" className="text-text dark:text-textDark text-center mb-3" />
        <TextComponent text="We've sent a verification code to your email" type="paragraph" className="text-gray-600 dark:text-gray-400 text-center mb-8" />

        <div className="flex justify-center gap-2 mb-8">
          {otp.map((digit, index) => (
            <motion.input
              key={index}
              ref={el => { inputRefs.current[index] = el; }}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-12 transition-all duration-200 ease-in-out h-14 text-center text-xl font-bold border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              maxLength={1}
              initial={{ scale: 1 }}
              animate={{ scale: digit ? [1.2, 1] : 1 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          ))}
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <button
          onClick={handleVerify}
          disabled={otp.join('').length !== 6}
          className={`py-3 px-4 rounded-lg font-medium mb-6 ${otp.join('').length === 6 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'}`}
        >
          Verify Code
        </button>

        <div className="flex flex-col items-center">
          <TextComponent text="Didn't receive the code?" type="paragraph" className="text-gray-600 dark:text-gray-400 text-center" />
          <button
            onClick={handleResendOtp}
            disabled={isResendDisabled}
            className={`mt-2 ${isResendDisabled ? 'text-gray-400 dark:text-gray-600 cursor-not-allowed' : 'text-blue-600 dark:text-blue-400 hover:text-blue-800'}`}
          >
            {isResendDisabled ? `Resend code in ${countdown}s` : 'Resend code'}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OTPModal;
