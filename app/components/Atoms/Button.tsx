import React from 'react'
import { IconType } from 'react-icons'

type Props = {
  text : string
  clicked? : () => void
  icon? : IconType
  color? : "Primary" | "Warning" | "Disabled" | "Danger" |any
}

const colors : { [key in Props['color']]: string } = {
  Primary : "bg-blue-700 text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
  Warning : "bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:focus:ring-yellow-800",
  Danger : "bg-red-600 hover:bg-red-700 text-white",
  Disabled : "bg-gray-200 text-text dark:bg-gray-400 dark:text-textDark hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-600 dark:border-gray-700"
}
const ButtonComponent = (props: Props) => {
  return (
    <button 
      onClick={props.clicked} 
      type="button" 
      className={`px-3 py-2 text-sm font-medium text-center inline-flex items-center 
      rounded-lg focus:outline-none 
      ${props.color ? colors[props.color] : colors.Primary}`}
    >
      {props.icon && <props.icon size={20} />}
      <span style={{ marginLeft: "5px", fontFamily: "'Inter', sans-serif" }}>
        {props.text}
      </span>
    </button>
  )
}

export default ButtonComponent