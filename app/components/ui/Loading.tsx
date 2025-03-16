import Image from 'next/image'
import React from 'react'
// Make sure you've installed framer-motion: npm install framer-motion
import { motion } from 'framer-motion'

type Props = {}

const Loading = (props: Props) => {
  // Check if window is defined to avoid SSR issues
  const isBrowser = typeof window !== 'undefined'
  
  // Text animation variants
  const textContainer = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i }
    }),
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.03, staggerDirection: -1 }
    }
  }
  
  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    },
    exit: {
      y: -20,
      opacity: 0
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center bg-background dark:bg-darkBackground w-full min-h-screen">
      <div className='flex flex-col items-center'>
        <div className="relative">
          {isBrowser && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full blur-xl"
                style={{ backgroundColor: '#3B82F6' }}
                animate={{
                  opacity: [0, 0.2, 0.4, 0.6, 0.5, 0.2, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: 1,
                  opacity: 1
                }}
                transition={{ 
                  duration: 0.8,
                  ease: "backOut"
                }}
              >
                <Image 
                  src="/logo.svg" 
                  alt="Loading" 
                  width={100} 
                  height={100} 
                  className="relative z-10" 
                />
              </motion.div>
            </>
          )}
          
          {!isBrowser && (
            <Image 
              src="/logo.svg" 
              alt="Loading" 
              width={100} 
              height={100} 
            />
          )}
        </div>
        
        <div className="mt-4 mb-2 h-12 flex items-center justify-center">
          {isBrowser ? (
            <motion.div
              className="overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textContainer}
              key="attendify-text"
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "loop", 
                repeatDelay: 1
              }}
            >
              <motion.div className="flex">
                {"Attendify".split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    className="text-3xl font-bold text-text dark:text-textDark"
                    variants={letterVariants}
                    transition={{
                      duration: 0.4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 1.2
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <div className="text-3xl font-bold text-text dark:text-textDark">Attendify</div>
          )}
        </div>
        
        {isBrowser ? (
          <motion.div 
            className="text-text dark:text-textDark flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span>Loading</span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              .
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
            >
              .
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
            >
              .
            </motion.span>
          </motion.div>
        ) : (
          <div className="text-text text-lg dark:text-textDark">Loading...</div>
        )}
      </div>
    </div>
  )
}

export default Loading