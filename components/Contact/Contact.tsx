import React from 'react'
import {MdEmail, MdPhone} from 'react-icons/md'
import {FaFacebookSquare, FaGithub, FaLinkedin, FaMapMarkedAlt, FaTwitter} from 'react-icons/fa'

const Contact = () => {
    return (
        
        <div className=' bg-slate-100 text-black flex justify-center space-x-8' id='Contact'>
            <div className='py-8'>
                <h1 className='font-bold pb-2'>Contact</h1>
                <div className='flex items-center pl-2'><MdPhone/> <span className='p-4'>(+66) 99-973-9420</span></div>
                <div className='flex items-center pl-2'><MdEmail/> <span className='p-4'>jirateep.l62@rsu.ac.th</span></div>
                <div className='flex items-center pl-2'><FaMapMarkedAlt/> <span className='p-4'>Trat, Thailand</span></div>
            </div>
            <div className='py-8'>
            <h1 className='font-bold pb-2'>Social</h1>
                <div className='flex items-center pl-2'><FaGithub/> <span className='p-4'>github.com/CrankyGus</span></div>
                <div className='flex items-center pl-2'><FaLinkedin/> <span className='p-4'>Jirateep Loyma</span></div>
                <div className='flex items-center pl-2'><FaFacebookSquare/> <span className='p-4'>Jirateep Loyma</span></div>
                <div className='flex items-center pl-2'><FaTwitter/> <span className='p-4'>@Amyol666</span></div>
            </div>
            
        </div>
       
    )
}

export default Contact