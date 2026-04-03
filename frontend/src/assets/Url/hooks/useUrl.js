import { useContext } from "react";
import { UrlContext } from "../url.context.jsx";
import { PutUrl,getAllUrls,getMessages} from "../services/url.api.js";

export const useUrl=()=>{
  
  const context=useContext(UrlContext)

  const {urls,setUrls,allUrls,setAllUrls,messages,setMessages}=context

  

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

  const handleGettingMessage=async({username,email,message})=>{

    try{
      const data=await getMessages({username,email,message})

      setMessages(data.data)
      console.log(data.data)
      return true

    }catch(error){
      console.log("Invalid Url", error)
      return false
    }
  }
  
  return {urls,setUrls,handleInputUrl,allUrls,setAllUrls,handleInputAllUrl,messages,setMessages,handleGettingMessage}
}

