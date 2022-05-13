import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'




const Contacts = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0oblb6b', 'template_zp8e9lm', form.current, 'q2wLr7hdFWj5Mgrik')
          .then((result) => {
              
          }, (error) => {
             
          });
          e.target.reset()
      };

  return (
    <>
    <div className='flex items-center justify-center w-full min-h-[100vh]'>
        <div className='w-[85%] bg-white rounded-md p-[20px,60px,30px,40px] shadow-gray-400'>
            <div className='flex items-center justify-between'>
                
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Contacts