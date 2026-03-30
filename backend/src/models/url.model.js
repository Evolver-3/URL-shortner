import mongoose from 'mongoose'

const urlSchema=new mongoose.Schema(
  {
    originalUrl:
      {
      type:String,
      required:[true,"originalUrl is required"],
      unique:true,
      trim:true
  
    }
    ,
    shortId:{
      type:String,
      required:true,
      unique:true,
      index:true
    },
    clicks:{
      type:Number,
      default:0
    },
    clickHistory:[
      {
        timestamp:{
          type:Date,
          default:Date.now
        },
        userAgent:String,
        ipAddress:String
      }

    ],
    createdAt:{
      type:Date,
      default:Date.now,
      expires:60*60*24*3
      

    }
  }
)

export const Url=mongoose.model("Url",urlSchema)