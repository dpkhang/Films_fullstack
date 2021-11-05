const jwt = require('jsonwebtoken')
const {verifyToken} = require('../helper/jwt.helper')

const authToken = (req, res, next) => {
    const authTokenHeader = req.headers.authorization
    // Bearer [token] 
    const token = authTokenHeader && authTokenHeader.split(' ')[1]
    if(!token){
        return res.sendStatus(401)
    }
    try {
        const decode = verifyToken(token, process.env.ACCESS_TOKEN_SECRET)
        console.log(decode)
        if(!decode) return res.sendStatus(403)
        req.user = decode
        next()
    }catch(err) {
        console.error(err) 

    }
}



module.exports = {authToken}