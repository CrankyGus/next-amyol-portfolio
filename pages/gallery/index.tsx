import React from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbar/navbar'
import About from '../../components/About/about'
import Footer from '../../components/Footer/footer'


const index = () => {
  return (
    <div className='bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[0vh]'>
    <Head>
      <title>Amyol - Homepage</title>
      <link rel="icon" href="image/AMYOL.png" />
    </Head>
    <Navbar/>
    <div className='flex justify-center items-center bg-[#383838] text-white h-screen'>
        Coming Soon...
    </div>
    
    <Footer/>

  </div>
  )
}

export default index