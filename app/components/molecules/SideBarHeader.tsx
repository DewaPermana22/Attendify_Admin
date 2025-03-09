import Image from "next/image";
import React, { useState } from "react";
import { IoCloseCircleOutline, IoMenu } from "react-icons/io5";
import TextComponent from "../Atoms/Text";
import { Tooltip } from "antd";
import UseColor from "@/app/constants/Color";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/libs/store";
import { toggleSidebar } from "@/app/libs/features/sidebar/sidebarSlice";

const SideBarHeader = () => {
  const color = UseColor();
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);
  const [toolTip, setToolTip] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0.8, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.8, x: -25 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`flex space-y-3 p-5 transition-all duration-300 ease-in-out ${isOpen ? "flex-row justify-between items-center" : "flex-col-reverse items-center gap-10"}`}
    >
      <div className={`flex items-center transition-all duration-300 ease-in-out ${isOpen ? "flex-row" : "flex-col"}`}>
        <Image src={"/Logo.svg"} alt="Logo" width={40} height={40} className="transition-all ease-in-out duration-300" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`overflow-hidden transition-all duration-300 ${isOpen ? "w-auto opacity-100 ml-1" : "w-0 opacity-0"}`}>
          <TextComponent type="subtitle" className="text-xl text-text dark:text-textDark" text="Attendify" />
        </motion.div>
      </div>

      <Tooltip
        title={isOpen ? "Minimize" : "Expand"}
        placement="bottomLeft"
        open={toolTip}
        onOpenChange={setToolTip}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onMouseEnter={() => setToolTip(true)}
          onClick={() => {
            setToolTip(false);
            dispatch(toggleSidebar());
          }}
          className="h-10 w-10 flex items-center justify-center transition-all text-text dark:text-textDark dark:bg-gray-900 bg-gray-200 ease-in-out duration-300 rounded-lg hover:bg-[#83deff] hover:text-[#0e315d] dark:hover:bg-[#0e315d] dark:hover:text-[#1eabff]"
        >
          {isOpen ? <IoCloseCircleOutline className="text-2xl" /> : <IoMenu className="text-2xl" />}
        </motion.button>
      </Tooltip>

    </motion.div>
  );
};

export default SideBarHeader;
