import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/libs/store';
import { setActiveMenu } from '@/app/libs/features/sidebar/sidebarSlice';
import SideBarHeader from '../molecules/SideBarHeader';
import SideBarMenu from '../Atoms/SideBarMenu';
import { RiDashboardHorizontalFill, RiDashboardHorizontalLine, RiTaskFill, RiTaskLine } from 'react-icons/ri';
import { HiMiniUsers, HiOutlineUsers } from 'react-icons/hi2';
import { PiCurrencyCircleDollarFill, PiCurrencyCircleDollarLight } from 'react-icons/pi';
import { GoClock, GoClockFill } from 'react-icons/go';
import { FaRegEnvelope, FaEnvelopeOpen } from 'react-icons/fa6';
import { AiFillNotification, AiOutlineNotification } from 'react-icons/ai';
import { IoSettingsOutline, IoSettingsSharp } from 'react-icons/io5';
import SidebarCategory from '../Atoms/SidebarCategory';
import { Switch } from 'antd';

const SideBar: React.FC = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const activeMenu = useSelector((state: RootState) => state.sidebar.activeMenu);

  const MasterRegion = [
    { icon: RiDashboardHorizontalLine, activeIcon: RiDashboardHorizontalFill, title: "Dashboard" },
    { icon: HiOutlineUsers, activeIcon: HiMiniUsers, title: "Employees" },
    { icon: PiCurrencyCircleDollarLight, activeIcon: PiCurrencyCircleDollarFill, title: "Salary" },
    { icon: RiTaskLine, activeIcon: RiTaskFill, title: "Task" }
  ];

  const ManagementRegion = [
    { icon: GoClock, activeIcon: GoClockFill, title: "Attendance" },
    { icon: FaRegEnvelope, activeIcon: FaEnvelopeOpen, title: "Letter" },
    { icon: AiOutlineNotification, activeIcon: AiFillNotification, title: "Announcement" }
  ];

  const SettingsRegion = [
    { icon: IoSettingsOutline, activeIcon: IoSettingsSharp, title: "Settings" }
  ];

  return (
    <div className={`h-screen border-r-2 dark:bg-darkBackground border-gray-200 dark:border-text shadow-sm bg-[#ffffff] text-black ${isOpen ? 'w-[355px]' : 'w-[80px]'} transition-all duration-300 ease-in-out`}>
      <SideBarHeader />
      <SidebarCategory category="Master">
        <SideBarMenu
          isOpen={isOpen} 
          category="Master"
          menuItems={MasterRegion} 
          active={activeMenu.category === "Master" ? activeMenu.index : null} 
          setActive={(index) => dispatch(setActiveMenu({ category: "Master", index }))}
        />
      </SidebarCategory>
      <SidebarCategory className='-translate-y-10' category="Management">
        <SideBarMenu 
          isOpen={isOpen}
          category="Management" 
          menuItems={ManagementRegion} 
          active={activeMenu.category === "Management" ? activeMenu.index : null} 
          setActive={(index) => dispatch(setActiveMenu({ category: "Management", index }))}
        />
      </SidebarCategory>
      <SidebarCategory className='-translate-y-20' category='Settings'>
        <SideBarMenu 
          isOpen={isOpen}
          category="Settings"
          menuItems={SettingsRegion} 
          active={activeMenu.category === "Settings" ? activeMenu.index : null} 
          setActive={(index) => dispatch(setActiveMenu({ category: "Settings", index }))}
        />
      </SidebarCategory>
      <div>
        <Switch defaultChecked />
      </div>
    </div>
  );
};

export default SideBar;
