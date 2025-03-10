import React from 'react'

type Props = {
    title : string
    subtitle : string
}

const HeaderContent = (props: Props) => {
  return (
    <div className='flex p-5 flex-col' style={{fontFamily: "'Poppins', sans-serif"}}>
      <h1 className='text-[26px] font-medium text-text dark:text-textDark'>{props.title}</h1>
      <h1 className='text-base font-medium text-gray-600 dark:text-primaryLight700'>{props.subtitle}</h1>
    </div>
  )
}

export default HeaderContent