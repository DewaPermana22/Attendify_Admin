"use client";
import React from 'react';
import Profile from '../molecules/Profile';
import GroupsAvatar from '../Atoms/AvatarGroups';
import TeamWorks from '../molecules/TeamWorks';
import ButtonComponent from '../Atoms/Button';
import LinearProgress from './LinearProgress';
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';

type Props = {
  level: 'small' | 'medium' | 'large' | 'extra-large' | 'dashboard';
  projectName? : string
  text? : string
  teamLeader? : string
};

const sizeMap = {
  small: { width: '150', height: '100' },
  medium: { width: '200', height: '150' },
  large: { width: '290', height: '210' },
  dashboard : { width: '350', height: '200' },
  'extra-large': { width: '300', height: '250' },
};

const CardComponent = ({ level, projectName, text, teamLeader }: Props) => {
  const { width, height } = sizeMap[level];
  const route = useRouter();

  const nav = () => {
    route.push('../../Pages/Kanban');
  }
  return (
    <div
      style={{ width: `${width}px`, height: `${height}px` }}
      className="bg-slate-50 cursor-pointer dark:bg-darkCard rounded-lg shadow-md border-2 border-gray-100 dark:border-zinc-800 flex flex-col">
      <div className='flex flex-col p-3'>
      <h1 className="text-xl text-text dark:text-textDark font-semibold" style={{fontFamily : "Inter"}}>{projectName}</h1>
      <TeamWorks leader={`${teamLeader}`}/>
      </div>
      <div className='flex justify-between p-3 items-center mt-7'>
        <LinearProgress progress={90}/>
        <ButtonComponent  text={"Detail"} clicked={() => nav()}/>
      </div>
    </div>
  );
};

export default CardComponent;
