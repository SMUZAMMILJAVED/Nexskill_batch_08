const express = require("express")
const router = express.Router()
router.get('/',(req,res)=>{
    res.send("product data")
})
module.exports = router