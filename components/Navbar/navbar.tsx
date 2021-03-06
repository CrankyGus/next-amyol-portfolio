import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsLine } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrFormClose } from 'react-icons/gr'
import { Link as LinkRS } from 'react-scroll'
import { motion } from 'framer-motion'
import { fadeIn } from '../VariantsFramer/variants'

const Navbar = () => {
  const [isSroll, setIsSroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false)


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSroll(true)
      } else {
        setIsSroll(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <motion.header variants={fadeIn("down")} initial="initial" animate="animate" className={`${isSroll && 'bg-[rgba(0,0,0,0.6)] backdrop-blur-md'}`}>
      <div className='flex space-x-2 items-center pl-[40px] md:space-x-10 h-[70px]'>
        <Link href="/">
          <a>
            <motion.img
              src="/image/AMYOLEDIT.png"
              animate={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              className='cursor-pointer object-contain mb-[-4px] transition-all duration-300 w-[100px] ' />
          </a>
        </Link>
        <div className='hidden space-x-4 md:flex font-[Prompt] font-bold pt-[5px] '>
          <Link href="/works">
            <a className='navlink'>Works</a>
          </Link>
          <Link href="/gallery">
            <a className='navlink'>Gallery</a>
          </Link>


        </div>
        <div className='flex flex-col font-[Prompt] font-bold pt-[5px] storke-white md:hidden '>
          {isOpen ? <GrFormClose className='bg-white rounded-md h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-110' onClick={() => setIsOpen(!isOpen)} />
            : <GiHamburgerMenu className='text-white h-6 w-6 cursor-pointer transition-all duration-300 hover:scale-110' onClick={() => setIsOpen(!isOpen)} />}
        </div>
        <div className={isOpen ? "absolute top-[60px] left-[9.75rem] p-4 rounded-md bg-white md:hidden" : "hidden"}>
          <Link href="/works">
            <a className='block  hover:text-[#2155CD] '>Works</a>
          </Link>
          <Link href="/gallery">
            <a className='block  hover:text-[#2155CD] '>Gallery</a>
          </Link>
        </div>
      </div>

      <div className='flex items-center space-x-4 text-sm font-light pr-[40px] '>
        <Link href="http://line.me/ti/p/~koonmin009" >
          <a target="_blank">
            <BsLine className='hidden text-white h-6 w-6 md:flex transtion-all duration-300 hover:w-7 hover:h-7' />
          </a>
        </Link>
        <Link href="https://github.com/CrankyGus" >
          <a target="_blank">
            <img
              src="/image/CrankyGus-Face.png"
              alt=""
              width={40}
              className="rounded-md transtion-all duration-300 hover:w-[43px]" />

          </a>
        </Link>
      </div>
    </motion.header>
  )
}

export default Navbar
