import { motion } from 'framer-motion';
import React from 'react';
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
              layoutId="indicator"
              className="absolute left-2 top-2.5 w-1 h-8 transform -translate-y-1/2 bg-blue-600 rounded-full"
            />
          )}
          
          <div
            className={`flex items-center space-x-2 p-3 rounded-lg cursor-pointer transition-all duration-300 
              ${active === index ? "bg-primaryLight100 text-primaryLight950" : "hover:bg-gray-100"}
            `}
            onClick={() => setActive(active === index ? null : index)}
          >
            {active === index ? (
              <item.activeIcon className="ml-3" size={25} />
            ) : (
              <item.icon className="ml-3" size={25} />
            )}
            <span
              className={`text-base font-medium transition-all duration-300 ${
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
