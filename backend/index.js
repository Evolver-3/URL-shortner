import './src/config/config.js'

import {app} from './src/app.js'

import { connectDB } from './src/database/db.js'

connectDB().then(()=>{
  app.listen(process.env.PORT || 6000,()=>{
    console.log(`server is running on port ${process.env.PORT || 6000}`)
  })
}).catch((error)=>{
  console.log("error in connecting to the database",error)
})