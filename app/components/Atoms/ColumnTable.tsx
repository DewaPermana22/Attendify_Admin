import React from 'react'

const ColumnTable = ({ text }: { text: string }) => {
  return (
    <th className="px-6 py-3 text-base" style={{fontFamily: "'Poppins', sans-serif"}}>{text}</th>
  )
}

export default ColumnTable