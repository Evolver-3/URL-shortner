import React, { useEffect, useState } from 'react'

import { useUrl } from '../../hooks/useUrl'

import MovingCard from '../FrontPage/MovingCard'



const Contact = () => {
  const [username,setUserName]=useState("")
  const [email,setEmail]=useState("")
  const [message,setMessage]=useState("")

  const [status,setStatus]=useState(null)
  const [loading,setLoading]=useState(false)

  const {handleGettingMessage}=useUrl()

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setLoading(true)
    const success=await handleGettingMessage({username,email,message})

    setLoading(false)
    setStatus(success ? "success" : "error")
  }

  useEffect(()=>{
    if(status){
      const timer=setTimeout(() => setStatus(null), 4000);
      return()=>clearTimeout(timer)
    }
  },[status])

  return (
    <main  className=''>

    <MovingCard headings={<Data/>}>

    {status === "success" &&(
      <div className='fixed top-5 right-5 bg-green-300 rounded-xl px-1 py-0.5 text-green-600 text-sm shadow-lg'>Message sent successfully</div>
    )}

    {status==="error" &&(
      <div className='fixed top-5 right-5 bg-red-300 rounded-xl px-1 py-0.5 text-red-600 text-sm shadow-lg'>
        Failed to send message
      </div>
    )}

      <div className='mx-10'>
      
      <form onSubmit={handleSubmit}>
        <input type='text' name='name' placeholder='Name' onChange={(e)=>(setUserName(e.target.value))}/>
        
        <input type="email" name="email" placeholder='E-mail' onChange={(e)=>(setEmail(e.target.value))}/>

        <textarea type='text' onChange={(e)=>(setMessage(e.target.value))}/>

          <button disabled={loading}>{loading ? "Sending..." :"Send"}</button>
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