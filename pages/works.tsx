import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar/navbar'

const Works = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
    <Head>
      <title>Our Works - Amyol</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar />
    </div>
  )
}

export default Works