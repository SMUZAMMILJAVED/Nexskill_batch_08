                            // main entry file 
//imports
const express=require("express");
const app=express();
const path=require('path')
const form=require('./routes/form')
// for extract json data
app.use(express.json())  
// for extract form data
app.use(express.urlencoded()) 
//for static files
app.use(express.static(path.join(process.cwd(),'public')))
//entry points
app.use('/form',form)
app.listen(4000,()=>{

    console.log('server is running... at port 4000')
})