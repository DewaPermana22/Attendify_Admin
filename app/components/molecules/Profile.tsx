import React from 'react'
import Avatar from '../Atoms/Avatar'
import TextComponent from '../Atoms/Text'

type Props = {
  email? : string
  name? : string
  className?: string;
}

const Profile = (props: Props) => {
  return (
    <div className= {`flex items-center ${props.className}`}>
        <Avatar/>
        <div className='flex flex-col justify-center text-start ml-[3px]'>
            <TextComponent text={`${props.name}`} className='ml-1 font-semibold text-[15px] text-text dark:text-textDark'/>
            <p style={{fontFamily: "'Inter', sans-serif"}} className='ml-1 -mt-1 text-sm text-gray-500'>{props.email}</p>
        </div>
    </div>  
  )
}

export default Profile