import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/navbar'
import Spline from '@splinetool/react-spline'

const Home: NextPage = () => {
  
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[80vh]'>
      <Head>
        <title>Amyol - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/* <video autoPlay muted loop width="100%">
        <source src="/videos/bg-video.mp4" type='video/mp4'/>
      </video> */}
      <main>


      </main>

    </div>
  )
}

export default Home
