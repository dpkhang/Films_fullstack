const UserModel = require('../models/user.model')
const {createToken, verifyToken} = require('../../helper/jwt.helper')

const Login = async (req, res, next) => {
    const {username, password} = req.body
    if(!username || !password)
        return res.sendStatus(400)
    let user = await UserModel.Login(username, password)
    if(!user) return res.sendStatus(400)
    const token = createToken(user)
    delete user.password
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
    const {id, username, password, email} = req.body
    if(!id || !username || !password || !email)
        res.sendStatus(400)
    const existedUser= 0
    const user  = {
        id, username, password, email
    }
    const result = await UserModel.Register(user)
    const token = createToken({username, password, email})
    delete result.password
    console.log(result)
    return res.status(200).json({
        message: 'Register successfully!',
        data: {
            ...result,
            token
        }
    })
}

module.exports = {
    Login,
    Register
}