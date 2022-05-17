import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar/navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/footer'
import About from '../components/About/about'

const Home: NextPage = () => {

  return (
    <div className='bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[0vh]'>
      <Head>
        <title>Amyol - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>

    </div>
  )
}

export default Home
