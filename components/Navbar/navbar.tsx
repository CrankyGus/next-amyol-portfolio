import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { BsLine } from 'react-icons/bs'

const Navbar = () => {
    const [isSroll, setIsSroll] = useState(false)


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
        <header className={`${isSroll && 'bg-[#141414]'}`}>
            <div className='flex space-x-2 items-center pl-[40px] md:space-x-10'>
                <Link href="/">
                    <a>
                        <img
                            src="/image/AMYOL.png"
                            width={100}
                            height={100}
                            alt=""
                            className='cursor-pointer object-contain mb-4' />
                    </a>
                </Link>
                <div className='hidden space-x-4 md:flex font-[Prompt] font-bold pt-[5px] '>
                    <Link href="/works">
                        <a className='navlink'>Works</a>
                    </Link>
                    <Link href="/about">
                        <a className='navlink'>About</a>
                    </Link>
                    <Link href="/contact">
                        <a className='navlink'>Contact</a>
                    </Link>

                </div>
            </div>

            <div className='flex items-center space-x-4 text-sm font-light pr-[40px] '>
                <Link href="http://line.me/ti/p/~koonmin009" >
                    <a target="_blank">
                        <BsLine className='hidden text-white h-6 w-6 md:flex ' />
                    </a>
                </Link>
                <Link href="https://github.com/CrankyGus" >
                    <a target="_blank">
                        <img
                            src="/image/CrankyGus-Face.png"
                            alt=""
                            width={40}
                            className="rounded-md " />

                    </a>
                </Link>
            </div>
        </header>
    )
}

export default Navbar