import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar/navbar'

const Home: NextPage = () => {
  return (
    <div className='relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]'>
      <Head>
        <title>Amyol - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <main>


      </main>

    </div>
  )
}

export default Home
