import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    progress : number
}

const LinearProgress = (props: Props) => {
  return (
    <div className="w-full gap-3 items-center flex max-w-lg">
    <div className="w-32 h-2 bg-gray-300 dark:bg-gray-400 rounded-full overflow-hidden">
      <motion.div
        className="h-full bg-primaryLight700"
        initial={{ width: "0%" }}
        animate={{ width: `${props.progress}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
    <h1 style={{fontFamily: "'Poppins', sans-serif"}} className="text-center font-medium text-base text-text dark:text-gray-200">
      {props.progress}%
    </h1>
  </div>
  )
}

export default LinearProgress