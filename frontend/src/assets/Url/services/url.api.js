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

