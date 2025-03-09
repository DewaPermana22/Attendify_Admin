import React from 'react'
import LinkText from './Atoms/LinkText'
import DropDownItems from './Atoms/dropDownItems'

export const Dropdown = () => {
  return (
    <div className="absolute mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200">
      <DropDownItems text="Reward" />
      <DropDownItems text="Promote" />
      <DropDownItems text="Activate account" />
    </ul>
    <div className="py-1">
      <LinkText text="Delete User" />
    </div>
  </div>
  )
}