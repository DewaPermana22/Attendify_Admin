import React from 'react'
import Avatar from '../Atoms/Avatar'
import TextComponent from '../Atoms/Text'

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='flex items-center'>
        <Avatar/>
        <div className='flex flex-col justify-center text-start ml-[6px]'>
            <TextComponent text='Dewa Permana' className='ml-1 font-semibold text-[15px] text-text dark:text-textDark'/>
            <p style={{fontFamily: "'Inter', sans-serif"}} className='ml-1 -mt-1 text-sm text-gray-500'>example@gmail.com</p>
        </div>
    </div>
  )
}

export default Profile