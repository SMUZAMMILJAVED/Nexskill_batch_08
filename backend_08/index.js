const express=require('express')
const dotenv=require('dotenv')
const connectDb = require('./config/db')
const user=require('./routes/user')
const app=express()
dotenv.config()
const port=process.env.PORT
connectDb()
app.use(express.json())
app.use('/user',user)
app.listen(port,()=>{
    console.log('server is running at port ',port)
})