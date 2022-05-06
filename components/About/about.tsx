import React from 'react'

const About = () => {
    return (
        <>
        <div className='bg-black pt-5 pb-24'>
            <div className='flex item-center justify-center'>
                <div className='rounded-md p-4 bg-red-500 transition-all duration-300 hover:bg-cyan-500 hover:text-white '>
                    Hello, I'm Mean. I'm a Developer from Trat, Thailand!
                </div>
            </div>
            
            <div className='flex flex-col justify-center items-center pt-[30px]'>
                <h1 className='text-white font-bold font-mono mb-2'>Jirateep Loyma</h1>
                <img src="/image/proflie.jpg" className='w-[150px] border-2 rounded-full transition-all duration-300' />
            </div>
            <div className='flex flex-col justify-center items-center pt-4 text-white'>
                <h1 className='text-yellow-500 pr-[19.5rem] text-2xl font-mono'>About Me</h1>
                <p className='pl-[50px]'>I'm Mean. I'm currently studying in the Faculty-</p>
                <p className='pr-[56px]'>of Computer Engineering at Rangsit University.</p>
                <p className='pr-[24px]'>I want to be a Fullstack developer. I really enjoy with </p>
                <p className='pr-[348px]'>coding.</p>
                
            </div>
            <div className='flex text-white space-x-4 justify-center'>
                <div className='p-3 bg-white text-black text-sm cursor-pointer transiton-all duration-300 hover:bg-cyan-500 hover:text-white'>Portfolio</div>
            </div>
            <div className='flex flex-col justify-center items-center pt-4 text-white'>
                <h1 className='text-yellow-500 pr-[24rem] text-2xl font-mono'>Bio</h1>
                <p className='pr-[10.5rem] pt-5'><span className='font-bold pr-5'>2001</span> Born in Surin (สุรินทร์) </p>
                <p className='pr-[89px] pt-1'><span className='font-bold pr-5'>2013</span> Study at Trattrakarnkhun School </p>
                <p className='pr-[30px] pt-1'><span className='font-bold pr-5'>2016</span> Study at Trattrakarnkhun School (SMEP) </p>
                <p className='pr-[22px] pt-1'><span className='font-bold pr-5'>2019 to present</span>Studying at Rangsit University. </p>
                
            </div>
        </div>
        </>
    )
}

export default About