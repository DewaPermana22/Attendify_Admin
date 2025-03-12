import React from 'react'
import HeaderContent from '../components/Atoms/HeaderContent'
import CardComponent from '../components/Card'
import ButtonComponent from '../components/Atoms/Button'
import { TbSortDescending2Filled } from "react-icons/tb";
import SearchBar from '../components/Atoms/SearchBar';

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <div className='flex justify-between items-center'>
        <HeaderContent title="Task Manager" subtitle="Plan, track, and complete your employees tasks." />
        <div className='flex gap-3'>
          <SearchBar placeholder='Search'/>
        <ButtonComponent icon={TbSortDescending2Filled} text='sort by' clicked={() => alert('hello')}/>
        </div>
      </div>

      <div className='flex m-5 gap-5'>
        <CardComponent projectName='Esemka Polling' teamLeader='John Doe' level='large' />
        <CardComponent projectName='si-Jaki' level='large' teamLeader='Bambang Hariyono'/>
        <CardComponent teamLeader='Prabowo' level='large' projectName='Create Dashboard' />
      </div>
    </div>
  ) 
}

export default page