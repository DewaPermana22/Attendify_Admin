import React from 'react'
import GroupsAvatar from '../Atoms/AvatarGroups'
import TextComponent from '../Atoms/Text'

type Props = {
    leader : string
}

const TeamWorks = (props: Props) => {
  return (
    <div className='flex mt-5 items-center'>
        <div>
        <GroupsAvatar/>
        </div>
        <div>
        <p style={{fontFamily: "'Inter', sans-serif"}} className='ml-1 -mt-1 text-sm text-gray-500'>{props.leader} Team's</p>
        </div>
    </div>
  )
}

export default TeamWorks