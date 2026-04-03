import mongoose from 'mongoose'

const contactSchema=new mongoose.Schema(
  {
    username:{
      type:String,
      required:[true,"username is required"],
      trim:true
    },
    email:{
      type:String,
      required:[true,"email is requird"],
      trim:true,
      lowercase:true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
    },
    message:{
      type:String,
      required:[true,"message is requried"],
      trim:true,
      minlength:10,
      maxlength:1000
    },
    ipAddress:String,
    userAgent:String
  },
  {
    timestamps:true
  }
)

export const UserContact=mongoose.model("UserContact",contactSchema)