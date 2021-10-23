const jwt = require('jsonwebtoken')


const createToken = (payload) => {
    try {
        const {_id, username} = payload
        const accessToken = jwt.sign({_id, username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn:"2h"})
        return accessToken
    }catch(err){
        console.log(err)    
    }
}

const verifyToken = (token, token_key)=>{
    try {
        const decode = jwt.verify(token, token_key)
        return {
            _id: decode._id,
            username: decode.username
        }
    }
    catch(err){
        console.log(err)
    }
}

const refreshToken = async (token)=>{
        try {
            const decode = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
            const tokens = generateToken(user)
            return tokens.refreshToken
        }catch(err){
            console.log(err)
        }
}

module.exports = {
    createToken,
    verifyToken,
    refreshToken
}
