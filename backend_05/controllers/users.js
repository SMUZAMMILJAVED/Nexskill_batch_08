const { createUser, findUser } = require("../models/user")
const bcrypt = require('bcrypt');
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
        return "login successfully"
       }else{
        return "invalid username or password!"
       }
    } catch (error) {
        throw error;
    }
}