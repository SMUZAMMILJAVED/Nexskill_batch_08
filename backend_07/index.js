const express=require('express')
const auth=require('./routes/auth')
const product=require('./routes/product')
const dotenv=require("dotenv")


const { verify } = require('./middleware/verify');
dotenv.config()
const app=express()
app.use(express.json())
app.use('/auth',auth)
app.use('/product',verify,product)
app.listen(4000,()=>{
    console.log("server is running at port 4000")
})