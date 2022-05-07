import React from 'react'
import {Link} from 'react-scroll/modules'

const Footer = () => {
    return (
        <footer className='px-[40px] pb-5 bg-transparent'>
            <div className='mt-[15px]  text-center text-sm text-white'>
                <Link to="home" smooth={true} duration={500} className='flex items-center justify-center space-x-4'><img src="/image/AMYOLEDIT.png" className='cursor-pointer w-[50px]' />© All Rights Reserved</Link>
            </div>
        </footer>
    )
}

export default Footer