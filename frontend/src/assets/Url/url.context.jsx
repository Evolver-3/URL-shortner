import {createContext,useState} from 'react'


export const UrlContext=createContext()

export const UrlProvider=({children})=>{

  const [urls,setUrls]=useState(null)
  return (
    <UrlContext.Provider value={{urls,setUrls}}>
      {children}
    </UrlContext.Provider>
  )
}