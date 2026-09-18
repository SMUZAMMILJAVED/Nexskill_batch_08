const express=require('express')
const fs=require('fs')
const router=express.Router()
const path=require('path')
router.get('/',(req,res)=>{
res.sendFile(path.join(process.cwd(),'views','form.html'))
})
router.post('/submit',async(req,res)=>{
   console.log(req.body) 
await fs.writeFile(path.join(process.cwd(),'data','users.json'),JSON.stringify(req.body),(err)=>{
    
})
res.send(req.body)
})
module.exports=router
