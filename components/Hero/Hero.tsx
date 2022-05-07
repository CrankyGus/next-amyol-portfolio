import { motion } from 'framer-motion'
import {Link as LinkR} from 'react-scroll'
import React,{useEffect, useState} from 'react'
import Typewriter from 'typewriter-effect'

const Hero = () => {
    const [offsetY , setOffsetY] = useState(0)
    const handleScroll = () =>{
        setOffsetY(window.pageYOffset)
    }
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
        return ()=> window.removeEventListener("scroll",handleScroll)
    },[])
    return (
        <motion.div exit={{opacity:0}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} id="home" className='h-[100vh] w-[100%] object-contain font-[Prompt]'>
            <video autoPlay muted loop className='absolute w-[100%] h-[1080px] object-cover -z-10 ' style={{transform:`translateY(${offsetY * 0.5}px)`}}>
                <source src="/videos/bg.mp4" type='video/mp4' />
            </video>
            <div className='flex flex-col justify-center items-center h-[90%] p-4 text-center'>
                <h1 className='text-4xl cursor-default text-[#FF3429]'>AMYOL</h1>
                <h1 className='text-white cursor-default'>
                    <Typewriter
                    options={{
                        strings: ["Frontend Developer", "Backend Developer","Fullstack Developer"],
                        autoStart: true,
                        loop: true
                    }} /></h1>
                <p className='text-white text-xs cursor-default'>I'm Mean. I'm from TRAT,Thailand. Currently studying in the Faculty of Computer Engineering at Rangsit University. </p>
                <div className='py-4 space-x-2'>
                    <LinkR to='about' smooth={true} duration={500}>
                        <button className='py-[5px] px-[28px] text-[1rem] text-white border-2 border-cyan-500  transition-all duration-300 hover:bg-cyan-500'>About</button>
                    </LinkR>
                    <button className='py-[5px] px-[28px] text-[1rem] text-white border-2 border-[#F24A72] hover:bg-[#F24A72]  transition-all duration-300'>Contact</button>
                </div>

            </div>
        </motion.div>
    )
}

export default Hero