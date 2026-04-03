import React,{useEffect} from 'react'
import { useUrl } from '../../hooks/useUrl'
import Footer from '../Footer'
import AllComp from './AllComp'
import Nav from '../Nav'


const Desc = () => {

  const {allUrls,handleInputAllUrl}=useUrl()

  useEffect(()=>{
    handleInputAllUrl()
  },[])
  return (
    <div className='bg-black w-full min-h-screen flex flex-col justify-between'>
      <Nav/>

      <div className='py-6'>
        
        <h2 className=' px-4 font-bold text-lg md:text-2xl lg:text-4xl  text-neutral-400 '>Details on converted Link</h2>
           <div className='px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4 pt-7'>

       
            {allUrls && allUrls?.map((url,idx)=>(
             <AllComp key={idx} className=''>
             

             <div className='px-5 py-4 flex flex-col gap-2 '>

               <p className='headings '>Long Url: 
                <span className='font-extralight text-[14px]'> {url.originalUrl.slice(0,25)}</span>
              </p>

              <p className="headings">Short Url: 
                <span className='text-green-400 text-[14px] font-extralight'> {url.shortId}</span>
              </p>

              <p className='headings'>Total Clicks: 
                <span className='text-sm font-semibold text-blue-600'> {url.clicks}</span>
              </p>
             </div>
             
             </AllComp>
            ))}
           </div>
      </div>

      <Footer/>
        
    </div>
  

      
   
  )
}

export default Desc