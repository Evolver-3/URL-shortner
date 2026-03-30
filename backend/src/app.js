import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
// import redisClient from './config/redis.js'

const app=express()

app.use(cors({
  origin:process.env.CORS,
  credentials:true
}))

app.use(express.json({
  limit:"16kb"
}))
app.use(express.urlencoded({
  extended:true,
  limit:"16kb"
}))

app.use(cookieParser())

const connectRedis=async()=>{
  try{
    await redisClient.connect()

  }catch(error){
    console.log("error in connecting to redis:",error)
  }
}

connectRedis()


import urlRoute from './routes/url.routes.js'
import redisClient from './config/redis.js'

app.use("/api/v1",urlRoute)



export { app }