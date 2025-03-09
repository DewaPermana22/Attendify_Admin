import { motion } from 'framer-motion';
import React, { act, useEffect, useState } from 'react';
import { IconType } from 'react-icons';

type Props = {
  activeIcon: IconType;
  icon: IconType;
  title: string;
};

type MenuSideBar = {
  isOpen: boolean;
  category: string;
  menuItems: Props[];
  active: number | null;
  setActive: (index: number | null) => void;
};

const SideBarMenu: React.FC<MenuSideBar> = ({ menuItems, active, setActive, isOpen }) => {
  const [positionFirst, setPositionFirst] = useState("50%");

  useEffect(() => {
    if (active !== 0) {
      setPositionFirst("10px");
    }
  }, [active]);

  return (
    <motion.div
      initial={{ opacity: 0.8, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.8, x: -25 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`flex flex-col transition-all duration-300 ease-in-out space-y-2 p-3 ${
        isOpen ? 'w-72' : 'w-[50px]'
      } rounded-lg`}
    >
      {menuItems.map((item, index) => (
        <div key={index} className="relative">
          {active === index && isOpen && (
            <motion.div 
              key={active}
              layoutId="indicator"
              className="absolute left-2 w-1 h-8 transform -translate-y-1/2 bg-blue-600 rounded-full"
              style={{ top: positionFirst, transform: positionFirst  === "50%" ? "translateY(-50%)" : "none" }}
            />
          )}
          
          <div
            className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-all duration-300 
              ${active === index ? "bg-primaryLight100 dark:bg-primaryLight950 text-primaryLight950" : "hover:bg-gray-100 dark:hover:bg-gray-900 dark:hover:text-white"}
            `}
            onClick={() => setActive(active === index ? null : index)}
          >
            {active === index ? (
              <item.activeIcon className="ml-3 flex-shrink-0 text-text dark:text-textDark" size={25} />
            ) : (
              <item.icon className="ml-3 flex-shrink-0 text-text dark:text-textDark" size={25} />
            )}
            <span
              className={`text-base text-text dark:text-textDark font-medium transition-all duration-300 ${
                isOpen ? "opacity-100 w-auto ml-2" : "opacity-0 w-0 overflow-hidden"
              }`}
            >
              {item.title}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default SideBarMenu;
