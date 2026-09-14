const fs = require('fs')
const path= require("path");
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
exports.createUser=async(email,password)=>{
const users=await readData()
const matched=users.find(u=>u.email===email)
if(matched){
    throw new Error ("user already exists")
}else{
    const id = Date.now();
   await writeData([...users,{id,email,password}])
}
}