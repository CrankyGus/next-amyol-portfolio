import React from 'react'
import Link from 'next/link'
import Workcard from './workcard'



const Work = () => {
    return (
        <>
            <div className='bg-white pt-[100px] pb-[34px] font-[Prompt]' id='about'>
                <div className='flex item-center justify-center'>
                    <div className='rounded-md p-4 bg-red-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white '>
                        Oh Hello there, You can check my portfolio below here!
                    </div>
                </div>

                <div className='p-5 flex space-x-4 justify-center '>
                    <Workcard img='/image/works/work5.png' title='Authenication' desc='Authenication with firebase and react.'/>
                    <Workcard img='/image/works/work1.png' title='Personal Portfolio' desc=' Website using reactjs and threejs.' />
                    
                </div>
                <div className='p-5 flex space-x-4 justify-center '>
                    <Workcard img='/image/works/work2.png' title='Discord Bot' desc='Bot Random Food with discord.js and run on heroku.' />
                    <Workcard img='/image/works/work4.png' title='Netflix Clone' desc='Lorem ipsum dolor sit amet.' />
                    
                </div>
                
            </div>

        </>
    )
}

export default Work