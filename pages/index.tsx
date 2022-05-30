import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar/navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/footer'
import About from '../components/About/about'
import Contact from '../components/Contact/Contact'

const Home: NextPage = () => {

  return (
    <div className='bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[0vh]'>
      <Head>
        <title>Amyol - Homepage</title>
        <link rel="icon" href="image/AMYOL.png" />
      </Head>
      <Navbar/>
      <Hero/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default Home
