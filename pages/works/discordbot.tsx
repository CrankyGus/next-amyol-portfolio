import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Navbar from '../../components/Navbar/navbar'
import Footer from '../../components/Footer/footer'
import Contact from '../../components/Contact/Contact'
import Skill from '../../components/Skill/Skill'

const discordbot = () => {
    return (
        <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[0vh] '>
            <Head>
                <title>AmyolDisordBot - Amyol</title>
                <link rel="icon" href="/image/AMYOL.png" />
            </Head>
            <Navbar />

            <motion.div exit={{ opacity: 0 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className='bg-[#282828] flex flex-col items-center justify-center pt-[130px] pb-[60px] '>


                <div className='rounded-md p-2 text-xs bg-yellow-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white'>
                    Amyol Discord Bot
                </div>

                <div className='pt-5'>
                    <img src="/image/works/work2.png" className='w-[300px] rounded-2xl border-4 ' alt="" />
                </div>

                <div className='p-2 text-sm  text-white'><span className='text-red-400 hover:text-red-500'><Link href="/works"><a>Works</a></Link></span> -{'>'} Discord Bot</div>
                <p className=' pb-5 pt-3 text-white'><span>ㅤㅤ</span>Bot discord for comunity server, This bot can random food form dataset.</p>
                <div className=' text-white'>
                    <button className='p-2 bg-red-400 text-sm cursor-default'>STACK</button>
                    ㅤㅤNodeJS, DiscordJS
                </div>
                <div className='pt-5'>
                    <div className='flex items-center justify-center text-black p-2 bg-slate-200'>Example</div>
                    <img src="/image/works/work2.gif" className='pt-5' width={700} alt="" />

                </div>
                <button className='p-4 mt-3 bg-red-400 text-sm cursor-pointer'>Source</button>
            </motion.div>
            <Contact />
            <Skill />
            <Footer />


        </div>
    )
}

export default discordbot