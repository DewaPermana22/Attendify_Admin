import React from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/libs/store";

type Props = {
  category: string;
  className?: string;
  children: React.ReactNode;
};

const SidebarCategory = ({ category, className = "", children }: Props) => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  return (
    <motion.div
      initial={{ opacity: 0.8, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.8, x: -25 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`flex flex-col p-7 transform transition-all duration-300 ease-in-out ${className}
      ${isOpen ? "w-auto" : "w-0 opacity-0 overflow-hidden"}`}
    >
      <p className={`text-[19px] font-medium text-gray-500
        ${isOpen ? "w-auto" : "w-0 opacity-0 overflow-hidden"}`
      }>{category}</p>
      {children}
    </motion.div>
  );
};

export default SidebarCategory;
