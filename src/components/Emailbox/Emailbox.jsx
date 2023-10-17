import React from 'react'
import './Emailbox.css'
import {LuMail} from 'react-icons/lu'
import {motion} from 'framer-motion'
import { containerVariants, containerVarients } from '@/src/utils/animations'

const Emailbox = () => {
  return (
    <motion.div 
    initial={{
      width:'0.5rem',
      borderRadius: '100%'

    }}
    whileInView={{
      width: '70%',
      borderRadius: '999px',
      transition: {
      transition: 'easeOut',
      duration: 1
      }
    }}
    className='emailbox'>


        {/* icon  */}
        <motion.div
           variants={containerVariants(0.6)}
           initial="offscreen"
           whileInView={"onscreen"}
           viewport={{
            once: true
           }}
        >
            <LuMail size={30} color='gray'/>
        </motion.div>


        {/*  input */}
        <motion.input 
        variants={containerVariants(0.7)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
         once: true
        }}
        type='email' placeholder='Enter Email'/>


        {/* get funded button */}
        <motion.div 
        variants={containerVariants(0.9)}
        initial="offscreen"
        whileInView={"onscreen"}
        viewport={{
         once: true
        }}
        className='getFunded'> Get funded</motion.div>
    </motion.div>
  )
}

export default Emailbox