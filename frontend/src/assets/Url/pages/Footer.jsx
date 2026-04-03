import React,{useState} from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {

  const [openContact,setOpenContact]=useState(false)
  return (
    <div className='flex flex-col gap-4 items-center justify-between text-white bg-gray-900 pt-4 border-t-2 border-neutral-300 pb-3 '>

      <div className='text-sm flex flex-col gap-2 text-neutral-400'>
        <h2>© 2026 Shorten - A tool to shorten a long link</h2>
      <h2 className='text-center text-md '> Made By <span className='text-red-500 text-semibold'>Ashu</span></h2>
      </div>

      <div className='grid grid-cols-2 md:grid-cols-4 gap-x-20 gap-y-1 text-[14px]'>
        <h3><Link to={'/'}>Shorten</Link></h3>
        <h3>Terms of Service</h3>
         
        <h3 className=''><Link to={"/contact"}>Contact</Link></h3>
        <h3><Link to={"/getAll"}>Get Description</Link></h3>
      </div>
    </div>

    //  <Contact openContact={openContact}/>

    

   
    
  )
}

export default Footer


