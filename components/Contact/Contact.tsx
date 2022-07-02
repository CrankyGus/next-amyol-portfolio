import React from 'react'
import Link from 'next/link'
import {MdEmail, MdPhone} from 'react-icons/md'
import {FaFacebookSquare, FaGithub, FaLinkedin, FaMapMarkedAlt, FaTwitter} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Contact = () => {
    return (
        
        <div className=' bg-slate-100 text-black flex justify-center text-sm md:space-x-8' id='Contact'>
            <div className='py-8'>
                <h1 className='font-bold pb-2'>Contact</h1>
                <div className='flex items-center pl-2'><MdPhone/> <span className='p-4'>(+66) 99-973-9420</span></div>
                <div className='flex items-center pl-2'><MdEmail/> <span className='p-4'>jirateep.l62@rsu.ac.th</span></div>
                <div className='flex items-center pl-2'><FaMapMarkedAlt/> <span className='p-4'>Trat, Thailand</span></div>
            </div>
            <div className='py-8'>
            <h1 className='font-bold pb-2'>Social</h1>
                <motion.div whileHover={{scale:1.1}} className='flex items-center pl-2 hover:text-red-500'><FaGithub/> <motion.span  className='p-4 '><Link href="https://github.com/CrankyGus"><a target="_blank">github.com/CrankyGus</a></Link> </motion.span></motion.div>
                <motion.div whileHover={{scale:1.1}} className='flex items-center pl-2 hover:text-red-500'><FaLinkedin/> <span className='p-4'><Link href="https://www.linkedin.com/in/jirateep-loyma-082021230/"><a target="_blank">Jirateep Loyma</a></Link></span></motion.div>
                <motion.div whileHover={{scale:1.1}} className='flex items-center pl-2 hover:text-red-500'><FaFacebookSquare/> <span className='p-4'>Jirateep Loyma</span></motion.div>
                <motion.div whileHover={{scale:1.1}} className='flex items-center pl-2 hover:text-red-500'><FaTwitter/> <span className='p-4'><Link href="https://twitter.com/AMYOL66"><a target="_blank">@Amyol666</a></Link></span></motion.div>
            </div>
            
        </div>
       
    )
}

export default Contact