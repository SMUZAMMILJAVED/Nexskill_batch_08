const express=require('express');
const { createUser } = require('../models/user');
const router=express.Router()
router.post('/login',(req,res)=>{

})
router.post('/signup',async(req,res)=>{
await createUser(req.body.email,req.body.password);
res.send("user created")
})
module.exports=router