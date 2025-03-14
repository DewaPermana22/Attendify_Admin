import React from 'react'

const ColumnTable = ({ text, ClassName }: { text: string, ClassName?: string }) => {
  return (
    <th className={`px-6 py-3 text-base font-medium text-text dark:text-textDark ${ClassName}`} style={{fontFamily: "'Poppins', sans-serif"}}>{text}</th>
  )
}

export default ColumnTable