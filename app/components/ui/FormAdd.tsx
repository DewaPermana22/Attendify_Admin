import { Input } from 'antd'
import React from 'react'
import InputComponent from '../Atoms/InputComponent'

type Props = {}

const FormAdd = (props: Props) => {
  return (
    <div className='flex flex-col bg-black'>
       <InputComponent label='Nama'/>
    </div>
  )
}

export default FormAdd