// const jwt = require("jsonwebtoken")
// const { USER_JWT_SECRET } = require("../config")

// function auth(req, res, next) {
//     const token = req.cookies.access_token
//     const decoded = jwt.verify(token, USER_JWT_SECRET)
//     if(decoded){
//         req.cookies.email = decoded.email;
        
//         next()
//     }else{
//         res.status(404).json({
//             msg: "You are not authorised"
//         })
//     }
// }

// module.exports = {
//     auth
// }