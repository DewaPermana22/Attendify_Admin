import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/libs/store';
import { setActiveMenu } from '@/app/libs/features/sidebar/sidebarSlice';
import SideBarHeader from '../molecules/SideBarHeader';
import SideBarMenu from '../Atoms/SideBarMenu';
import { RiDashboardHorizontalFill, RiDashboardHorizontalLine, RiTaskFill, RiTaskLine } from 'react-icons/ri';
import { HiMiniUsers, HiOutlineUserCircle, HiOutlineUsers } from 'react-icons/hi2';
import { PiCurrencyCircleDollarFill, PiCurrencyCircleDollarLight } from 'react-icons/pi'; 
import { GoClock, GoClockFill } from 'react-icons/go';
import { HiOutlineChat, HiChat } from "react-icons/hi";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaRegEnvelope, FaEnvelopeOpen, FaRegUser, FaUser } from 'react-icons/fa6';
import { AiFillNotification, AiOutlineNotification } from 'react-icons/ai';
import { IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5';
import SidebarCategory from '../Atoms/SidebarCategory';
import { TbNumber123 } from "react-icons/tb";

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const activeMenu = useSelector((state: RootState) => state.sidebar.activeMenu);

  const MasterRegion = [
    { icon: RiDashboardHorizontalLine, activeIcon: RiDashboardHorizontalFill, title: "Dashboard" },
    { icon: HiOutlineUsers, activeIcon: HiMiniUsers, title: "Employees" },
    { icon: PiCurrencyCircleDollarLight, activeIcon: PiCurrencyCircleDollarFill, title: "Salary" },
    { icon: RiTaskLine, activeIcon: RiTaskFill, title: "Task" },
    { icon: TbNumber123, activeIcon: TbNumber123, title: "Referal Code" }
  ];

  const ManagementRegion = [
    { icon: GoClock, activeIcon: GoClockFill, title: "Attendance" },
    { icon: FaRegEnvelope, activeIcon: FaEnvelopeOpen, title: "Letter" },
    { icon: AiOutlineNotification, activeIcon: AiFillNotification, title: "Announcement" }
  ];

  const GeneralRegion = [
    { icon: HiOutlineChat, activeIcon: HiChat, title: "Group Chat" },
    { icon: IoSettingsOutline, activeIcon: IoSettingsSharp, title: "General Settings" },
    { icon: HiOutlineUserCircle, activeIcon: BiSolidUserCircle, title: "Account Settings" }
  ];  

  return (
    <motion.div 
      initial={{ width: 80 }}
      animate={{ width: isOpen ? 355 : 80 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="h-screen border-r-2 dark:bg-darkBackground border-gray-200 dark:border-text shadow-sm bg-[#ffffff] 
      text-black"
    >
      <SideBarHeader />
      <div className="max-h-screen">
        <SidebarCategory category="Master">
          <SideBarMenu
            isOpen={isOpen} 
            category="Master"
            menuItems={MasterRegion} 
            active={activeMenu.category === "Master" ? activeMenu.index : null} 
            setActive={(index) => dispatch(setActiveMenu({ category: "Master", index }))}
          />
        </SidebarCategory>
        <div className='relative -top-12'>
        <SidebarCategory category="Management">
          <SideBarMenu 
            isOpen={isOpen}
            category="Management" 
            menuItems={ManagementRegion} 
            active={activeMenu.category === "Management" ? activeMenu.index : null} 
            setActive={(index) => dispatch(setActiveMenu({ category: "Management", index }))}
          />
        </SidebarCategory>
        </div>
        <div className='relative -top-24'>
        <SidebarCategory category='General'>
          <SideBarMenu 
            isOpen={isOpen}
            category="General"
            menuItems={GeneralRegion} 
            active={activeMenu.category === "General" ? activeMenu.index : null} 
            setActive={(index) => dispatch(setActiveMenu({ category: "General", index }))}/>
        </SidebarCategory>
        </div>
        <SidebarCategory category='General'>
          <SideBarMenu 
            isOpen={isOpen}
            category="General"
            menuItems={GeneralRegion} 
            active={activeMenu.category === "General" ? activeMenu.index : null} 
            setActive={(index) => dispatch(setActiveMenu({ category: "General", index }))}
          />
        </SidebarCategory>
      </div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
      <h1>Logout</h1>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
