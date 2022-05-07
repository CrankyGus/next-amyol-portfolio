import React from 'react'
import Link from 'next/link'

interface props {
    img: string,
    title: string,
    desc: string,
    
}

const Workcard = ({ img, title, desc }: props) => {

    return (
        <div className='grid grid-cols-[repeat(auto-fit,minmax(12rem,16rem))] justify-center'>
            <div className='flex flex-col justify-between transition-transform duration-200 hover:scale-105 cursor-pointer overflow-hidden shadow-[0_2px_20px_rgba(225,229,238,1)] rounded-[0.2rem]'>
                <div>
                    <img src={img} alt="" />
                    <div className='p-4 text-md'>{title}</div>
                    <p className='text-sm pl-[1rem] pb-6'>{desc}</p>
                </div>
                
            </div>
        </div>
    )
}

export default Workcard