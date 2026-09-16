const express = require("express")
const { createUser, loginUser } = require("../controllers/users")
const router = express.Router()
router.post('/login', async (req, res) => {
   try {
     const resp = await loginUser(req.body.email, req.body.password)
    res.send(resp)
   } catch (error) {
    res.send(error.message)
   }
})
router.post('/signup', async (req, res) => {
    try {
        await createUser(req.body.email, req.body.password)
        res.send("signup successfully!")
    } catch (error) {
        res.send(error.message)
    }
})
module.exports = router