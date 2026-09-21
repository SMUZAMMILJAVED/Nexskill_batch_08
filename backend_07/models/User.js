
const fs=require('fs');
const bcrypt = require('bcrypt');
const path=require("path");
const filePath=path.join(process.cwd(),'data','users.json')
const readData=()=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(filePath,(err,fileData)=>{
            if(err){
                reject()
            }else{
                resolve(JSON.parse(fileData.toString()))
            }
        })
    })
}
const writeData=(data)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,JSON.stringify(data),(err)=>{
            if(err){
                reject()
            }else{
                resolve()
            }
        })
    })
}
exports.createUser=async(email,password,id)=>{
try {
    const users=await readData()
const matched=users.find(u=>u.email===email)
if(matched ){
   throw new Error("user already exists")
}else{
    const plainPass=password;
    const saltRounds = 16;
    const hashedPass=await bcrypt.hash(plainPass,saltRounds)
     writeData([...users,{id:id,email:email,password:hashedPass}])
}
} catch (error) {
    throw error;
}
}
exports.findUser= async(email)=>{
try {
   const users= await readData()
   const matched=users.find(u=>u.email===email)
   return matched;
} catch (error) {
    throw error;
}
}