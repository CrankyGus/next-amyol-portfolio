import React from 'react'
import Link from 'next/link'

const About = () => {
    return (
        <>
            <div className='bg-[#282828] pt-5 pb-[34px] font-[Kanit]' id='about'>
                <div className='flex item-center justify-center'>
                    <div className='rounded-md text-sm p-4 bg-red-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white '>
                        Hello, I'm Mean. I'm a Developer from Trat, Thailand!
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center pt-[30px]'>
                    <h1 className='text-white font-bold font-mono mb-2'>Jirateep Loyma</h1>
                    <img src="/image/proflie.jpg" className='w-[150px] border-2 rounded-full transition-all duration-300' />
                </div>
                <div className='flex flex-col justify-center items-center pt-4 text-white'>
                    <h1 className='text-yellow-500 pr-[19rem] text-l font-mono'>About Me</h1>
                    <p className='pl-[50px] pt-5'>I'm Mean. I'm currently studying in the Faculty-</p>
                    <p className='pr-[56px]'>of Computer Engineering at Rangsit University.</p>
                    <p className='pr-[24px]'>I want to be a Fullstack developer. I really enjoy with </p>
                    <p className='pr-[348px]'>coding.</p>

                </div>
                <div className='flex text-white space-x-4 justify-center'>
                    <Link href="/works">
                        <a>
                            <div className='p-3 bg-white text-black text-sm cursor-pointer transiton-all duration-300 hover:bg-cyan-500 hover:text-white'>Resume</div>
                        </a>
                    </Link>
                    <Link href="/works">
                        <a>
                            <div className='px-[20px] py-3 bg-white text-black text-sm cursor-pointer transiton-all duration-300 hover:bg-cyan-500 hover:text-white'>Works</div>
                        </a>
                    </Link>
                </div>
                <div className='flex flex-col justify-center items-center pt-4 text-white'>
                    <h1 className='text-yellow-500 pr-[22rem] text-l font-mono'>Bio</h1>
                    <p className='pr-[166px] pt-5'><span className='font-bold pr-5'>2001</span> Born in Surin (สุรินทร์) </p>
                    <p className='pr-[88px] pt-1'><span className='font-bold pr-5'>2013</span> Study at Trattrakarnkhun School </p>
                    <p className='pr-[35px] pt-1'><span className='font-bold pr-5'>2016</span> Study at Trattrakarnkhun School (SMEP) </p>
                    <p className='pr-[27px] pt-1'><span className='font-bold pr-5'>2019 to present</span>Studying at Rangsit University. </p>

                </div>
            </div>
        </>
    )
}

export default About