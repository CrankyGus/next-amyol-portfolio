import { motion } from 'framer-motion'
import { fadeIn, staggerContainer, loopdown } from '../VariantsFramer/variants'
import { Link as LinkR } from 'react-scroll'
import React, { useEffect, useState, useRef } from 'react'
import Typewriter from 'typewriter-effect'
import { AiFillCaretDown } from 'react-icons/ai'

const Hero = () => {
    const [offsetY, setOffsetY] = useState(0)
    const constRef = useRef(null)
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} id="home" className='h-[100vh] w-[100%] object-contain '>
            <video autoPlay muted loop className='absolute w-[100%] h-screen object-cover -z-10 ' style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
                <source src="/videos/bg 2.mp4" type='video/mp4' />
            </video>
            <div className='flex flex-col justify-center items-center h-[90%] p-4 text-center'>


                <motion.img variants={fadeIn()} initial="initial" animate="animate" src='image/AMYOLEDIT.png' className='mt-[80px] w-[200px] transition-all duration-300 hover:w-[220px] ' />

                <motion.h1 variants={fadeIn()} initial="initial" animate="animate" className='text-white cursor-default'>
                    <Typewriter
                        options={{
                            strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
                            autoStart: true,
                            loop: true
                        }} /></motion.h1>
                <motion.p variants={fadeIn()} initial="initial" animate="animate" className='text-white text-xs cursor-default'>I'm Mean. I'm from TRAT,Thailand. Currently studying in the Faculty of Computer Engineering at Rangsit University. </motion.p>
                <motion.div variants={staggerContainer} initial="initial" animate="animate" className='py-4 space-x-2'>
                    <LinkR to='about' smooth={true} duration={500}>
                        <motion.button variants={fadeIn()} className='py-[5px] px-[28px] text-[1rem] text-white border-2 border-cyan-500  transition-all duration-300 hover:bg-cyan-500'>About</motion.button>
                    </LinkR>
                    <motion.button variants={fadeIn()} className='py-[5px] px-[28px] text-[1rem] text-white border-2 border-[#F24A72] hover:bg-[#F24A72]  transition-all duration-300'>Contact</motion.button>
                </motion.div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <motion.div variants={loopdown} initial="initial" animate="animate" className='text-white text-4xl cursor-pointer'>
                    <LinkR to='about' smooth={true} duration={500}>
                        <AiFillCaretDown />
                    </LinkR>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Hero