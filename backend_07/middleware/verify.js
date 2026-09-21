var jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../data/key');
exports.verify=(req,res,next)=>{
    
if(req.headers.token){
    
   jwt.verify(req.headers.token, SECRET_KEY, function(err, decoded) {
    if(err){
        res.send("token invalid")
    }else{
        next()
         console.log(decoded.email)
    }
  // bar
});
}else{
    res.send("token not found!")
}
}