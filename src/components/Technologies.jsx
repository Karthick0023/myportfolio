import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { TbBrandNextjs } from 'react-icons/tb'
import { FaNodeJs } from 'react-icons/fa'
// import { BiLogoPostgresql } from 'react-icons/bi'
import { SiMongodb } from 'react-icons/si'
import { DiRedis } from 'react-icons/di'
// import { SiOracle } from 'react-icons/di'
import { SiOracle } from 'react-icons/si'
 import { SiDjango } from 'react-icons/si'
import { motion } from 'framer-motion'
const iconv=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse"
        }
    }
})
 const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
        <motion.h2
         whileInView={{opacity:1,y:0}}
         initial={{opacity:0,y:-100}}
         transition={{duration:1.5}} className='text-4xl my-20 text-center'>Technologies

        </motion.h2>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        
        className='flex flex-wrap items-center justify-center gap-4'>
            <motion.div
            variants={iconv(2.5)}
            initial="initial"
            animate="animate"
            className='rounded-2xl border-4 border-ne p-4'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            <motion.div
            variants={iconv(2.5)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-ne p-4'>
                <TbBrandNextjs className='text-7xl'/>
            </motion.div>
            <motion.div 
            variants={iconv(2.5)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-ne p-4'>
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>
            <motion.div
            variants={iconv(2.5)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-ne p-4'>
                <SiDjango className='text-7xl text-sky-700'/>
            </motion.div>
            <motion.div
            variants={iconv(2.5)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-ne p-4'>
                <SiMongodb className='text-7xl text-green-400'/>
            </motion.div>
            <motion.div
            variants={iconv(2.5)}
            initial="initial"
            animate="animate" className='rounded-2xl border-4 border-ne p-4'>
                <SiOracle className='text-7xl text-red-700'/>
            </motion.div>
        </motion.div>
        
    </div>

  )
}

export default Technologies