import React from 'react';
import Image from 'next/image';
import TextComponent from '@/app/components/Atoms/Text';
import { FormSignIn } from '@/app/components/ui/FormSignIn';
import ModalsOTP from '@/app/components/ui/ModalsOTP';
import {signIn} from 'next-auth/react'

const Page = () => {
  return (
    <div className="flex items-center justify-center bg-background dark:bg-darkBackground w-full min-h-screen">
      <div className="flex w-full max-w-6xl h-[81.5vh] shadow-2xl">
        <div className="relative h-full w-1/2">
          <Image src="/ImageAuth2.svg" alt="Login Background" fill className="object-cover"/>
        </div>
        <div className="w-1/2 h-full dark:bg-darkCard bg-white flex flex-col justify-center p-10 rounded-e-2xl">
          <div className="flex items-center mb-4">
            <Image src="/Logo.svg" alt="Attendify Logo" width={40} height={40}/>
            <TextComponent text="Attendify" type="subtitle" className="text-text dark:text-textDark ml-2" />
          </div>
          <TextComponent text="Hello, Welcome Back" type="title" className="text-text dark:text-textDark" />
          <TextComponent text="Smart HR solutions for better employee management." type="paragraph" className="text-text dark:text-textDark mb-5"/>
          <FormSignIn />
        </div>
      </div>
    </div>
  );
};

export default Page;