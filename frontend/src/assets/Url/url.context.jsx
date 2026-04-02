import {createContext,useState} from 'react'


export const UrlContext=createContext()

export const UrlProvider=({children})=>{

  const [urls,setUrls]=useState(null)
  const [allUrls,setAllUrls]=useState(null)
  return (
    <UrlContext.Provider value={{urls,setUrls,allUrls,setAllUrls}}>
      {children}
    </UrlContext.Provider>
  )
}