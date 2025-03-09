import React from 'react'
import DataContent from '../Atoms/dataContent'

interface RowContentProps {
  text: string; 
}

const RowContent: React.FC<RowContentProps> = ({ text }) => {
  return (
    <DataContent>
      <div className="flex items-center">
        {text}
      </div>
    </DataContent>
  )
}

export default RowContent
