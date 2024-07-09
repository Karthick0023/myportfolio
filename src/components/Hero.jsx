import React from 'react'
import {HERO_CONTENT} from '../constants'
import {profilePic} from '../constants'
import { motion } from 'framer-motion'
// import { Hidden } from 'react-icons/gi'
const conatainer=(delay)=>({
    Hidden:{ x:-100,opacity:0},
    visible:{ x:0,opacity:1,transition:{duration:.5,delay:delay},
},
});

const Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <div className='flex flex-wrap'>
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col otems-center lg:items-start ml-10'>
                    <motion.h1 variants={conatainer(0)}
                    initial='Hidden'
                    animate='visible'
                    className='pb-16 text-6xl font-thin tracking-tight 
                    lg:mt-16 lg:text-8xl'>
                        Karthick K
                    </motion.h1>
                    <motion.span variants={conatainer(0.5)}
                    initial='Hidden'
                    animate='visible' className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Web Develper</motion.span>
                    <motion.p variants={conatainer(1)}
                    initial='Hidden'
                    animate='visible' className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
                </div>
            </div>
            <div className='w-1/4 lg:w-1/4 lg:p-8'>    
                <div className='flex justify-center'>
                    <motion.img 
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1, delay:1.2}} 
                    src={profilePic} alt="Karthick K" />
                </div>
            </div>
        </div>
    </div>

  )
}

export default Hero