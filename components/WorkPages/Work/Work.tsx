import React from 'react'
import Link from 'next/link'



const Work = () => {
  return (
    <>
      <div className='bg-[#282828] pt-7 pb-[34px]' id='about'>
      <div className='flex item-center justify-center'>
                    <div className='rounded-md p-4 bg-red-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white '>
                        Oh Hello there, You can check my portfolio below here!
                    </div>
                </div>

                <div className='flex flex-col justify-center items-center pt-[20px]'>
                    <img src="/image/gitbanner.jpeg" className='w-[474px] rounded-[45px]' alt="" />
                    
                </div>
                <div className='flex flex-col justify-center items-center pt-4 text-white'>
                    <h1 className='text-yellow-500 pr-[19.5rem] text-xl font-mono'>About Me</h1>
                    <p className='pl-[50px] pt-5'>I'm Mean. I'm currently studying in the Faculty-</p>
                    <p className='pr-[56px]'>of Computer Engineering at Rangsit University.</p>
                    <p className='pr-[24px]'>I want to be a Fullstack developer. I really enjoy with </p>
                    <p className='pr-[348px]'>coding.</p>

                </div>
                <div className='flex text-white space-x-4 justify-center'>
                    <Link href="/works">
                        <a>
                            <div className='p-3 bg-white text-black text-sm cursor-pointer transiton-all duration-300 hover:bg-cyan-500 hover:text-white'>Portfolio</div>
                        </a>
                    </Link>
                </div>
                <div className='flex flex-col justify-center items-center pt-4 text-white'>
                    <h1 className='text-yellow-500 pr-[24rem] text-xl font-mono'>Bio</h1>
                    <p className='pr-[10.5rem] pt-5'><span className='font-bold pr-5'>2001</span> Born in Surin (สุรินทร์) </p>
                    <p className='pr-[89px] pt-1'><span className='font-bold pr-5'>2013</span> Study at Trattrakarnkhun School </p>
                    <p className='pr-[30px] pt-1'><span className='font-bold pr-5'>2016</span> Study at Trattrakarnkhun School (SMEP) </p>
                    <p className='pr-[22px] pt-1'><span className='font-bold pr-5'>2019 to present</span>Studying at Rangsit University. </p>

                </div>
      </div>
      
    </>
  )
}

export default Work