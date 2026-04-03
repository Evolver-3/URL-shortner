import {createContext,useState} from 'react'


export const UrlContext=createContext()

export const UrlProvider=({children})=>{

  const [urls,setUrls]=useState(null)
  const [allUrls,setAllUrls]=useState(null)


  const [messages,setMessages]=useState(null)

  return (
    <UrlContext.Provider value={{urls,setUrls,allUrls,setAllUrls,messages,setMessages}}>
      {children}
    </UrlContext.Provider>
  )
}