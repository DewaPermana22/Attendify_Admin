import React from 'react'
import { IconType } from 'react-icons'
import { AiOutlineUserAdd } from 'react-icons/ai'

type Props = {
  text : string
  clicked : () => void
  icon? : IconType
}

const ButtonComponent = (props: Props) => {
  return (
    <button onClick={props.clicked} type="button" className="px-3 py-2 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
    {/* <AiOutlineUserAdd size={20}/> */}
    {props.icon && <props.icon size={20}/>}
    <span style={{marginLeft: "5px", fontFamily: "'Inter', sans-serif"}}>{props.text}</span>
    </button>
  )
}

export default ButtonComponent