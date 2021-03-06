import React from 'react'
import Link from 'next/link'
import Workcard from './Workcard'


const Work = () => {
    return (
        <>
            <div className='bg-white pt-[100px] pb-[34px] font-[Prompt]' id='about'>
                <div className='flex item-center justify-center'>
                    <div className='rounded-md p-4 bg-red-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white '>
                        Oh Hello there, You can check my portfolio below here!
                    </div>
                </div>

                <div className='flex justify-center items-center pt-7'>
                    Web Development
                </div>

                <div className='p-5 flex space-x-4 justify-center '>
                    <Link href="/works/keeblur">
                        <a>
                            <Workcard img='/image/works/work7.png' title='Keeblur' desc='Ecommerce Website using NextJS and TailwindCss.' />
                        </a>
                    </Link>
                    <Link href="/works/portfolio">
                        <a>
                            <Workcard img='/image/works/work1.png' title='Personal Portfolio' desc=' Website using reactjs, threejs and styled-components.' />
                        </a>
                    </Link>

                </div>
                <div className='p-5 flex space-x-4 justify-center '>
                    <Link href="/works/authen">
                        <a>
                            <Workcard img='/image/works/work5.png' title='Authenication' desc='Authenication with firebase and react.' />
                        </a>
                    </Link>
                    <Link href="/works/amyolnext">
                        <a>
                            <Workcard img='/image/works/work8.png' title='Amyol Next' desc='a portfolio website using Nextjs and TailwindCss.' />
                        </a>
                    </Link>
                </div>
                {/* <div className='p-5 flex space-x-4 justify-center '>
                    <Link href="/works/discordbot">
                        <a>
                            <Workcard img='/image/works/work2.png' title='Discord Bot' desc='Bot Random Food with discord.js and run on heroku.' />
                        </a>
                    </Link>
                    <Link href="/works/neflixclone">
                        <a>
                            <Workcard img='/image/works/work4.png' title='Netflix Clone' desc='Lorem ipsum dolor sit amet.' />
                        </a>
                    </Link>

                </div> */}
                <div className='flex justify-center items-center pt-7'>
                    Software Development
                </div>
                <div className='p-5 flex space-x-4 justify-center '>
                    <Link href="/works/discordbot">
                        <a>
                            <Workcard img='/image/works/work2.png' title='Discord Bot' desc='Bot Random Food with discord.js and run on heroku.' />
                        </a>
                    </Link>
                    <Link href="/works/meintgallery">
                        <a>
                            <Workcard img='/image/works/work6.png' title='Meint Gallery' desc='Desktop app gallery with visual C#.' />
                        </a>
                    </Link>

                </div>

                {/* <div className='flex justify-center items-center pt-7'>
                    Microcontroller Development
                </div>
                <div className='p-5 flex space-x-4 justify-center '>
                    <Link href="/works/discordbot">
                        <a>
                            <Workcard img='/image/works/work2.png' title='Discord Bot' desc='Bot Random Food with discord.js and run on heroku.' />
                        </a>
                    </Link>
                    <Link href="/works/neflixclone">
                        <a>
                            <Workcard img='/image/works/work4.png' title='Netflix Clone' desc='Lorem ipsum dolor sit amet.' />
                        </a>
                    </Link>

                </div> */}
            </div>

        </>
    )
}

export default Work