const express= require('express')
const path=require('path')
const router = express.Router()
          //routes
router.get('/',(req,res)=>{
    res.sendFile(path.join(process.cwd(),'views','index.html'))
    
})
router.post('/',(req,res)=>{
   console.log(req.body) 
    res.send("from post")
})
router.put('/',(req,res)=>{
    res.send("from put")
})
router.delete('/',(req,res)=>{
    res.send("from delete")
})
module.exports=router