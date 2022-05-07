import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'
import { Link as Scroll } from 'react-scroll'


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
                <h1 className='text-4xl cursor-default text-[#FF3429]'>AMYOL</h1>
                <h1 className='text-white cursor-default'>
                    <Typewriter
                        options={{
                            strings: ["NFTs", "Web Devlopment", ""],
                            autoStart: true,
                            loop: true
                        }} /></h1>
                <p className='text-white text-xs cursor-default pb-5'>Hi, Welcome to my portfolio. This is a new drops NFTs. </p>
                <div className='flex item-center justify-center space-x-5 mb-[10px]'>
                    <Link href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101207990231273233887248933519704168876911177921171572667196749088114471862273">
                        <a target="_blank">
                            <motion.img animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} src="/image/NFTs/3.jpeg" width={250} alt="" />
                        </a>
                    </Link>
                    <Link href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101207990231273233887248933519704168876911177921171572667196749083716425351169">
                        <a target="_blank">
                            <motion.img animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} src="/image/NFTs/4.png" width={250} alt="" />
                        </a>
                    </Link>
                    <Link href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/101207990231273233887248933519704168876911177921171572667196749089213983490049">
                        <a target="_blank">
                            <motion.img animate={{ scale: 1 }} whileHover={{ scale: 1.1 }} src="/image/NFTs/1.jpeg" width={250} alt="" />
                        </a>
                    </Link>
                    
                </div>
                <div className='py-4 space-x-2'>
                    <Scroll to='about' smooth={true} duration={500}>
                        <button className='py-[5px] px-[28px] text-[1rem] text-white border-2 border-cyan-500  transition-all duration-300 hover:bg-cyan-500'>Works</button>
                    </Scroll>
                    <button className='py-[5px] px-[28px] text-[1rem] text-white border-2 border-[#F24A72] hover:bg-[#F24A72]  transition-all duration-300'>Contact</button>
                </div>
            </div>

        </motion.div>
    )
}

export default Herowork