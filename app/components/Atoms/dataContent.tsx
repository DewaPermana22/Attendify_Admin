import React from 'react'

interface DataContentProps {
  children: React.ReactNode;
}

const DataContent = ({ children } : DataContentProps) => {
  return (
    <td className="px-6 py-4">
        {children}
    </td>
  )
}

export default DataContent