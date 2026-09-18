const express=require('express')
const dotenv=require('dotenv')
const product=require('./routes/product')
dotenv.config()
const port=process.env.PORT
const app=express()
app.use(express.json()) //extract json data from body
app.use(express.urlencoded({extended:false})) ////extract form / url-encoded data from body
app.use('/products',product)
app.listen(port,()=>{
    console.log("server is running at port",port)
})