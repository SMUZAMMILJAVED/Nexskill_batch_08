const { createUser, findUser } = require("../models/User")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET_KEY } = require("../data/key");
exports.createUser=async(email,password)=>{
    try {
        const id=Date.now()
    await createUser(email,password,id)

    } catch (error) {
        throw error
    }
}
exports.loginUser=async(email,password)=>{
    try {
       const user= await findUser(email)
      const pass=  await bcrypt.compare(password,user.password)
       if(user && pass){
var token =await  jwt.sign({ email }, SECRET_KEY);
        return {token}
       }else{
        return "invalid username or password!"
       }
    } catch (error) {
        throw error;
    }
}