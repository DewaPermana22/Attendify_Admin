import React from 'react'
import TextComponent from '../components/Atoms/Text'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <TextComponent text='Settings' type='paragraph' className='text-3xl font-bold text-text dark:text-textDark'/>
    </div>
  )
}

export default page