import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'
import { fadeIn, staggerContainer, loopdown } from '../../VariantsFramer/variants'


const Herowork = () => {
    const [offsetY, setOffsetY] = useState(0)
    const handleScroll = () => {
        setOffsetY(window.pageYOffset)
    }
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{duration:1}} id="home" className='h-[100vh] w-[100%] object-contain'>
            <video autoPlay muted loop className='absolute w-[100%] h-[1080px] object-cover -z-10 ' style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
                <source src="/videos/bg.mp4" type='video/mp4' />
            </video>

            <div className='flex flex-col justify-center items-center h-[90%] p-4 text-center'>
                {/* <h1 className='text-4xl cursor-default text-[#FF3429]'>AMYOL</h1> */}
                
                    
                    
                
                <motion.h1 variants={fadeIn("d")} initial="initial" animate="animate"  className='text-white cursor-default'>
                    <Typewriter
                        options={{
                            strings: [ "Web Devlopment","Software Development", "Microcontroller Development"],
                            autoStart: true,
                            loop: true
                        }} /></motion.h1>
                <motion.p  variants={fadeIn("d")} initial="initial" animate="animate"  className='text-white text-xs cursor-default pb-5'>Hi, Welcome to my portfolio. Enjoy with my work! </motion.p>
                <motion.div variants={fadeIn()} initial="initial" animate="animate" className='flex item-center justify-center space-x-5 mb-[10px]'>
                    <Link href="/works/portfolio">
                        <a target="">
                            <motion.img animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} src="/image/works/work1.png" className='hover:p-4 hover:border-2' width={250} alt="" />
                        </a>
                    </Link>
                    <Link href="https://amyol-portfolio.firebaseapp.com/">
                        <a target="_blank">
                            <motion.img animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} src="/image/works/work7.png" className='hover:p-4 hover:border-2' width={250} alt="" />
                        </a>
                    </Link>
                    <Link href="/works/discordbot">
                        <a target="">
                            <motion.img animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} src="/image/works/work2.png" className='hover:p-4 hover:border-2' width={250} alt="" />
                        </a>
                    </Link>
                    </motion.div>
                <motion.div variants={staggerContainer} initial="initial" animate="animate" className='space-x-2 py-6'>
                    <Scroll to='about' smooth={true} duration={500}>
                        <motion.button variants={fadeIn()}  className='py-[5px] px-[28px] text-[1rem] text-white border-2 border-cyan-500  transition-all duration-300 hover:bg-cyan-500'>More</motion.button>
                    </Scroll>
                    <Scroll to='Contact' smooth={true} duration={500}>
                    <motion.button   variants={fadeIn()}  className='py-[5px] px-[28px] text-[1rem] text-white border-2 border-[#F24A72] hover:bg-[#F24A72]  transition-all duration-300'>Contact</motion.button>
                    </Scroll>
                </motion.div>
            </div>

        </motion.div>
    )
}

export default Herowork