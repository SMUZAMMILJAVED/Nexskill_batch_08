const express=require('express');
const app=express()
const path=require('path')
const form=require('./routes/form')
const port=4000
app.use(express.static(path.join(process.cwd(),'public')))
app.use((req,res,next)=>{
console.log(req.url)
req.data="belal"  //auth
next()
})
app.use('/form',form)
// app.use((req,res,next)=>{
//     console.log(req.data)
// res.send("hello world 2")
// })
app.listen(port,()=>{
    console.log("server is running at port",port)
})