import React from 'react'

interface Props {
  id? : string | null
}
const CheckBox = (props : Props) => {
  return (
      <input id={props.id || ""} type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600" />
  )
}

export default CheckBox