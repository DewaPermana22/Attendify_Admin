import Image from 'next/image'
import React from 'react'

type Props = {}

const Avatar = (props: Props) => {
  return (
    <div className='flex items-center justify-center rounded-full'>
        <div className='h-10 w-10 bg-[#d2bef4] rounded-full'></div>
        {/* <Image src="/Logo.svg" alt="Logo" width={40} height={40} className="transition-all ease-in-out duration-300" /> */}
    </div>
  )
}

export default Avatar