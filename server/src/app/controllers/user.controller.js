const {LoginModel, RegisterModel} = require('../models/user.model')
const {createToken, verifyToken} = require('../../helper/jwt.helper')

const Login = async (req, res, next) => {
    const {username, password} = req.body
    if(!username || !password)
        return res.sendStatus(400)
    let user = await LoginModel(username, password)
    if(!user) return res.sendStatus(400)
    const token = createToken(user)
    console.log(user)
    res.status(200).json({
        message: 'Login successfully!',
        data: {
            ...user,
            token
        }
    })
}

const Register = async (req, res, next) =>{
    const {username, password, email} = req.body
    if(!username || !password || !email)
        res.sendStatus(400)
    RegisterModel(username, password, email)
    const token = createToken({username, password, email})
    return res.status(200).json({
        message: 'Register successfully!',
        data: {
            username,
            password,
            email,
            token
        }
    })
}

module.exports = {
    Login,
    Register
}