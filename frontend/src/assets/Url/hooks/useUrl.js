import { useContext } from "react";
import { UrlContext } from "../url.context.jsx";
import { PutUrl,getAllUrls} from "../services/url.api.js";

export const useUrl=()=>{
  
  const context=useContext(UrlContext)

  const {urls,setUrls,allUrls,setAllUrls}=context

  

  const handleInputUrl=async({originalUrl})=>{
    try{
      const data=await PutUrl({originalUrl})
      setUrls(data.data)

      return true

    }catch(error){ 
      console.error("Invalid Url", error)
      return false

    }
  }


  const handleInputAllUrl=async()=>{
    try{
      const data=await getAllUrls()

  

       setAllUrls(data.data)

    }catch(error){
      console.log("Url not found", error)
      return false
       
      
    }
  }

  
  return {urls,setUrls,handleInputUrl,allUrls,setAllUrls,handleInputAllUrl}
}

