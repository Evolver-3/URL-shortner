import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from '../utils/ApiError.js'
import { ApiResponse } from "../utils/ApiResponse.js";
import { Url } from "../models/url.model.js";
import {nanoid} from 'nanoid'
import redisClient from "../config/redis.js";
import { UserContact} from '../models/contact.model.js'



const updateLongUrl=asyncHandler(async(req,res)=>{

  const {originalUrl}=req.body;


  if(!originalUrl){
    throw new ApiError(409,"Please provide a long Url to proceed !!")
  }

  const existing=await Url.findOne({originalUrl})

  if(existing){
    return res.status(200).json(
      new ApiResponse(200,existing,"Short Url already exists for this given Long Url")
    )
  }
  const shortCode=nanoid(6)

  let collisionCheck=await Url.findOne(
    {
      shortId:shortCode
    }
  )
  while(collisionCheck){
    shortCode=nanoid(6);
    collisionCheck=await Url.findOne(
      {
        shortId:shortCode
      }
    )
  }

  const url=await Url.create(
    {
      originalUrl,
      shortId:shortCode
    }
  )

  return res.status(201).json(
    new ApiResponse(201,url,"short Url generated")
  )
})




const redirectToLongUrl=asyncHandler(async(req,res)=>{

  const {shortId}=req.params

  if(!shortId){
    throw new ApiError(400, "not url fetched !!")
  }

  // if(!redisClient.isOpen){
  //   await redisClient.connect()
  // }

  //redis
   console.log("Redis Client Status:", redisClient.isOpen)
  const cachedUrl=await redisClient.get(shortId)

  if(cachedUrl){
    console.log("Cache hit")
    return res.redirect(cachedUrl)
  }
  const url=await Url.findOne(
    {shortId}
  )
  
  if(!url){
    throw new ApiError(404, "Url not found")
  }
  
  url.clicks+=1;
  url.clickHistory.push(
    {
      timestamp:Date.now(),
      userAgent:req.headers['user-agent'],
      ipAddress:req.ip
    }
  )

  await url.save()

 


  await redisClient.set(shortId,url.originalUrl,{
    EX:60*60*24*3
  })

  return res.status(302).redirect(url.originalUrl)
})


const getAllUrls=asyncHandler(async(req,res)=>{

  const urls=await Url.find().limit(6).select("originalUrl shortId clicks")

  if(!urls){
    throw new ApiError(404, "No url found")
  }

  console.log(urls)
  return res.status(200).json(
    new ApiResponse(200, urls, "All Url's fetched")
  )
})

const getContact=asyncHandler(async(req,res)=>{

  const {username,email,message}= req.body

  if(!username || !email || !message){
    throw new ApiError(404,"Entries are required")
  }

  const contact=await UserContact.create(
    {
      username,
      email,
      message,
      ipAddress:req.ip,
      userAgent:req.headers["user-agent"]
    }
  )

  if(!contact){
    throw new ApiError(409,"Somthing went wrong when sending message")
  }

  console.log("Message: ", contact)

  return res.status(201).json(
    new ApiResponse(201,contact,"Message sent successfully")
  )



})



export {updateLongUrl,redirectToLongUrl,getAllUrls,getContact}