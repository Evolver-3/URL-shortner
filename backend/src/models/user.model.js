import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userSchema=new mongoose.Schema(
  {
    username:{
      type:String,
      required:[true,"username is required!!"],
      unique:true,
      minlength:4,
      maxlength:12,
      // match: /^[a-zA-Z0-9]+$/
    },
    fullname:{
      type:String,
      required:[true,"fullname is required!!"],
      trim:true,
      // match: /^[a-zA-Z\s]+$/,
      maxlength:40
    },
    email:{
      type:String,
      required:[true,"email is required!!"],
      unique:true
    },
    password:{
      type:String,
      required:[true,"password is required!!"]
    },
    refreshToken:{
      type:String
    }

  },
  {
    timestamps:true
  }
)

userSchema.pre("save",async function(next){
  if(!this.isModified("password"))return

  this.password=await bcrypt.hash(this.password,10)
   return next
})

userSchema.methods.comparePassword=async function(password){
  return await bcrypt.compare(password,this.password)
}

userSchema.methods.generateAccessToken=function(){
  return jwt.sign(
    {
      _id:this._id,
      username:this.username,
      fullname:this.fullname,
      email:this.email
    },process.env.ACCESS_TOKEN_SECRET,{
      expiresIn:process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

userSchema.methods.generateRefreshToken=function(){
  return jwt.sign(
    {
      _id:this._id
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn:process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export const User=mongoose.model("User",userSchema)