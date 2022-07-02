import { motion } from 'framer-motion'
import React from 'react'
import { DataLogo } from './LogoData'

const Skill = () => {
    return (
        <>
        
            <motion.div  className=' bg-white flex space-x-4 md:space-x-10 justify-center items-center py-12 '>
                {
                    DataLogo.map(item => {
                        return (

                            <motion.img whileHover={{scale:1.3}}  src={item.image} alt=""  className=" hover:drop-shadow-xl grayscale hover:grayscale-0 w-[15px] md:w-[25px] lg:w-[45px]" />

                        )
                    })
                }
            </motion.div>
        </>
    )
}

export default Skill