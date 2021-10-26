const UserModel = require('../models/user.model')
const {createToken, verifyToken} = require('../../helper/jwt.helper')

const Login = async (req, res, next) => {
    try {
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
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: 'Error Server!',
            err
        })
    }
}

const Register = async (req, res, next) =>{
    try {
        const {id, username, password, email} = req.body
        if(!id || !username || !password || !email)
            return res.sendStatus(400)
        const user  = {
            id, username, password, email
        }
        const result = await UserModel.Register(user)
        const token = createToken({username, password, email})
        delete result.password
        return res.status(200).json({
            message: 'Register successfully!',
            data: {
                ...result,
                token
            }
        })
    }catch(err) {
        console.log(err)
        return res.status(500).json({
            message: 'Error Server!',
            err
        })
    }
}

const findUser = async (req, res) => {
    try {
        const {username, uid} = req.query
        let result
        if(!username && !uid)
            res.sendStatus(404)
        if(username)
            result = await UserModel.findUserByUsername(username)
        if(uid) 
            result = await UserModel.findUserById(uid)
        delete result.password
        if(result) res.status(200).json({
            message: 'ok!',
            data: result
        })
        else res.status(200).json({
            message: 'Data is not found!',
            data: []
        })
    }catch(err){
        console.log(err)
        return res.status(500).json({
            message: 'Error Server!',
            err
        })
    }
}

module.exports = {
    Login,
    Register,
    findUser
}