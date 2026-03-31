import { useContext } from "react";
import { UrlContext } from "../url.context.jsx";
import { PutUrl } from "../services/url.api.js";

export const useUrl=()=>{
  
  const context=useContext(UrlContext)

  const {urls,setUrls}=context

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


  
  return {urls,setUrls,handleInputUrl}
}

