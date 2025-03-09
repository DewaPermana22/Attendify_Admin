import React from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6';

const SearchBar = ({placeholder} : {placeholder : string}) => {
  return (
    <div className="relative">
          <input
            type="text"
            className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={placeholder}
          />
          <FaMagnifyingGlass className="w-4 h-4 absolute top-3 left-3 text-gray-500 dark:text-gray-400"/>
        </div>
  )
}

export default SearchBar