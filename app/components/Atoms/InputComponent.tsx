import React, { useState } from 'react'
import { IconType } from 'react-icons'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

type Props = {
  label: string
  Messgae?: string | null
  colorStatus?: string | null
  otherMessgae?: string | null
  icon?: IconType | null
  placeholder: string | null
  type: string
}

const InputComponent = (props: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <>
      <label htmlFor="website-admin" className="block relative top-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
      </label>
      <div className="flex relative">
        {props.icon && (
          <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border rounded-e-0 border-gray-300 border-e-0 rounded-s-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
            <props.icon size={25} />
          </span>
        )}
        <input 
          type={props.type === "password" && !showPassword ? "password" : "text"} 
          id="website-admin"
          className={`rounded-lg ${props.icon ? 'rounded-s-none' : 'rounded-lg'} bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0
         w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder={props.placeholder || ''}
        />
        {props.type === "password" && (
          <button 
            type="button" 
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400"
          >
            {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
          </button>
        )}
      </div>
    </>
  )
}

export default InputComponent
