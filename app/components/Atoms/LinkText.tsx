import React from 'react'

const LinkText = ({ text }: { text: string }) => {
  return (
    <a style={{ cursor: 'pointer', fontFamily: "'Inter', sans-serif" }} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        {text}
    </a>
  )
}

export default LinkText