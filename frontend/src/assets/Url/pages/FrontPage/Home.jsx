import React, { useState } from 'react'
import { useUrl } from '../../hooks/useUrl'
import MovingCard from './MovingCard'
import Back from '../Back'



const Home = () => {

  const {urls,handleInputUrl}=useUrl()

  const [inputValue,setInputValue]=useState("")

  const [error,setError]=useState(null)

  const handleSubmit=async(e)=>{
    e.preventDefault()
    setError("")

    const success=await handleInputUrl({originalUrl:inputValue})

    if(success){
      
    }
  }

  return (
    <div className='flex flex-col justify-between '>
      <MovingCard headings={<Back/>}>
      <form onSubmit={handleSubmit}>

        <div className="relative overflow-hidden z-50 rounded-full p-px shadow-sm shadow-rose-600/20 hover:shadow-finta">

          <div className='absolute inset-0 z-0 '>
            <div className='bg-linear-to-r from-rose-600 via-rose-500 to-rose-600 animate-spin-reverse h-full w-full'></div>
          </div>

          <input 
        type="text" 
        name="text" 
        placeholder='Enter original Url'
        onChange={(e)=>{setInputValue(e.target.value)}}/>
       
        </div>
        
       
          {urls?.shortId &&(
            <a href={`https://url-shortner-tpcv.onrender.com/api/v1/r/${urls.shortId}`}>
              <h2 className='text-neutral-400 font-bold'>Short Url:
                <span className='text-green-400 font-extralight hover:text-red-400 active:text-red-500 transition-all  duration-300'> {`https://url-shortner-tpcv.onrender.com/${urls.shortId}`}</span>
              </h2>
            </a>
          )}


        <button>Generate</button>

        
      </form>
     </MovingCard>

     </div>

  )
}

export default Home


