import React from 'react'
import TableUI from '../components/ui/Table'
import Pagination from '../components/ui/Pagination'

const page = () => {
  return (
    <div>
      <div className='flex p-5 flex-col' style={{fontFamily: "'Poppins', sans-serif"}}>
      <h1 className='text-[26px] font-medium text-text dark:text-textDark'>Employees</h1>
      <h1 className='text-base font-medium text-gray-600 dark:text-primaryLight700'>Directory & Personnel Records</h1>
      </div>
      <TableUI/>
      <div className='flex justify-end p-5'>
        <div></div>
      <Pagination/>
      </div>
    </div>
  )
}

export default page