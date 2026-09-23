const express=require("express")
const User = require("../models/User")
const router=express.Router()
router.get('/',(req,res)=>{
res.send("user data!")
})
router.post('/',async(req,res)=>{
//    console.log(req.body) 
   await User.create(req.body)
res.send("saved user!")
})
module.exports=router;