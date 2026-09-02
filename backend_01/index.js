// //core/vanilla nodejs =>express (node js library)
// const http=require('http')
// const app=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.write("hello from server")
// res.end()
//     }else if(req.url==='/form'){
//         res.setHeader('Content-Type','text/html')
// res.write("<form action='/submit' method='POST'><input name='uname'/><button>Submit</button> </from>")
// res.end()
//     }
//     else if(req.url==='/submit'){
//         let result=''
//       req.on('data',(chunk)=>{
// result=result+chunk
//       })
//       req.on('end',()=>{
//         console.log(result)
//       })
// res.write("data recived!")
// res.end()
//     }
//     else{
//          res.write("404-not found")
// res.end()
//     }

// })
// app.listen(4000)
