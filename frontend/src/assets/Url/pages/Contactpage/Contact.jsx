import React, { useState } from 'react'

import { useUrl } from '../../hooks/useUrl'

import MovingCard from '../FrontPage/MovingCard'
import AllComp from '../AllUrl/AllComp'
import Nav from '../Nav'
import Footer from '../Footer'


const Contact = () => {
  const [username,setUserName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")

  const {handleGettingMessage}=useUrl()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    
    const success=await handleGettingMessage({username,email,message})

    if(success){
      return <h2>this is it</h2>
    }

   
  }
  return (
    <main  className=''>

    <MovingCard headings={<Data/>}>

      <div className='mx-10'>
      
      <form onClick={handleSubmit}>
        <input type='text' name='name' placeholder='Name' onChange={(e)=>(setUserName(e.target.value))}/>
        
        <input type="email" name="email" placeholder='E-mail' onChange={(e)=>(setEmail(e.target.value))}/>

        <textarea type='text' onChange={(e)=>(setMessage(e.target.value))}/>

          <button>Send</button>
      </form>

      
      </div>
    </MovingCard>
    </main>
   
  
  )
}

export default Contact

const Data=()=>{
  return (
    <div className='text-white flex flex-col gap-3'>
      <h2 className='text-2xl md:text-3xl lg:text-5xl pl-4 text-white'>Contact Us</h2>
      <ul className='text-md flex flex-col gap-1 md:text-md lg:text-xl max-w-sm px-4'>
        <li>Contact our team, if any problem arises with the Url</li>
        <li>Any unwanted or malicious url's will be removed.</li>
      </ul>
    </div>
  )
}