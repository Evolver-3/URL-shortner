import axios from 'axios'

const api=axios.create(
  {
    baseURL:"http://localhost:5000",
    withCredentials:true
  }
)

export async function PutUrl({originalUrl}){

  try{
    const res=await api.post("/api/v1/shorten",{originalUrl})

    console.log("Getting url from user:", res.data)

    return res.data

  }catch(error){
    console.log(error)
    throw error
  }
}

export async function getAllUrls(){
  try{
    const res=await api.get("/api/v1/getAll")


    return res.data

  }catch(error){
    consol.log(error)
    throw error
  }
}

export async function getMessages({username,email,message}){

  try{
    
    const res=await api.post("/api/v1/contact",{username,email,message})

    console.log("Getting messages:", res.data)
    return res.data

  }catch(error){
    console.log(error)
    throw error
  }

}
