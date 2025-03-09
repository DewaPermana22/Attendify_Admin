import React from 'react'

const LinkText = ({ text }: { text: string }) => {
  return (
    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        {text}
    </a>
  )
}

export default LinkText