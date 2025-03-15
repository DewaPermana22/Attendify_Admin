import TextComponent from '@/app/components/Atoms/Text'
import { FormLogin } from '@/app/components/ui/FormLogin'
import Form from 'antd/es/form/Form'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='flex bg-white w-full h-screen'>
      <div className=''>
      <Image src={"/AuthImage.svg"} alt="Logo" width={650} height={1000} className="transition-all ease-in-out duration-300" />
      </div>
      <div className='flex flex-col justify-center pl-20'>
        <TextComponent text='Welcome Back' type='subtitle' className='text-text' />
        <TextComponent text='Smart HR solutions for better employee management.' type='paragraph' className='text-text' />
        <FormLogin/>
      </div>
    </div>
    </>
  )
}

export default page