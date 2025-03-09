import React from 'react'

const DropDownItems = ({text} : {text : string}) => {
  return (
    <li>
    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
      {text}
    </a>
  </li>
  )
}

export default DropDownItems