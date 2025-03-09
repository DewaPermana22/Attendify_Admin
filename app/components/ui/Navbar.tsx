import UseColor from '@/app/constants/Color';
import React from 'react'
import { HiOutlineBellAlert } from 'react-icons/hi2'
import Profile from '../molecules/Profile';
import { Switch, Tooltip } from 'antd';
import { LuMoonStar } from "react-icons/lu";
import { AiFillSun } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/libs/store';
import { iconDark } from '@/app/libs/features/themes/themesSlice';
import {motion} from 'framer-motion'


type Props = {}

const Navbar = (props: Props) => {
    const setDark = useSelector((state : RootState) => state.theme.darkmode);
    const dispatch = useDispatch();
    const [rotateIcon, setRotateIcon] = React.useState(false);
    const color = UseColor();

    const clickedTheme = () => {
        dispatch(iconDark());
        setRotateIcon(!rotateIcon);
    }

  return (
    <div className='flex items-center pb-3 bg-white dark:bg-darkBackground justify-between'>
        <div></div>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-5'>
               <Tooltip  placement="bottom" title={setDark ? "Light Mode" : "Night Mode"}>
                <motion.button
                className='w-10 h-10 flex items-center justify-center transition-all duration-300 ease-in-out'
                whileTap={{rotate : rotateIcon ? 360 : -360}}
                transition={{duration : 0.3, ease : "linear"}}
                 onClick={clickedTheme}>
                {setDark ? <AiFillSun size={25} className='text-text dark:text-textDark' /> : <LuMoonStar size={25} style={{color : color.text}} />}
                </motion.button>
               </Tooltip>
             <Tooltip  placement="bottom" title="Notification">
             <HiOutlineBellAlert size={25}
                className='text-text dark:text-textDark' />
             </Tooltip>
            </div>
            <Profile/>
        </div>
    </div>
  )
}

export default Navbar