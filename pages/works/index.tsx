import React from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbar/navbar'
import { motion, MotionConfig } from 'framer-motion'
import Herowork from '../../components/WorkPages/Herowork/Herowork'
import Work from '../../components/WorkPages/Work/Work'
import Footer from '../../components/Footer/footer'
import Contact from '../../components/Contact/Contact'

const Works = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[0vh] '>
      <Head>
        <title>Our Works - Amyol</title>
        <link rel="icon" href="/image/AMYOL.png" />
      </Head>
      <Navbar />
      <Herowork />
      <Work/>
      <Contact/>
      <Footer/>


    </div>
  )
}

export default Works