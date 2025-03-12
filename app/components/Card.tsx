import React from 'react';
import Profile from './molecules/Profile';
import GroupsAvatar from './Atoms/AvatarGroups';
import TeamWorks from './molecules/TeamWorks';

type Props = {
  level: 'small' | 'medium' | 'large' | 'extra-large' | 'dashboard';
  projectName? : string
  text? : string
  teamLeader? : string
};

const sizeMap = {
  small: { width: '150', height: '100' },
  medium: { width: '200', height: '150' },
  large: { width: '250', height: '200' },
  dashboard : { width: '350', height: '200' },
  'extra-large': { width: '300', height: '250' },
};

const CardComponent = ({ level, projectName, text, teamLeader }: Props) => {
  const { width, height } = sizeMap[level];

  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="bg-slate-50 cursor-pointer dark:bg-darkCard rounded-lg shadow-md border-2 border-gray-100 dark:border-zinc-800 flex"
    >
      <div className='flex flex-col p-3'>
      <h1 className="text-xl text-text dark:text-textDark font-semibold" style={{fontFamily : "Inter"}}>{projectName}</h1>
      <TeamWorks leader={`${teamLeader}`}/>
      </div>
    </div>
  );
};

export default CardComponent;
