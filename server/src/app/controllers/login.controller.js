const loginModel = require('../models/login.model')
const jwt = require('jsonwebtoken')

class Login {
    async index(req, res, next){
        let user = await loginModel.login(req, res)
        const token = Login.generateToken(user)
        const update = await loginModel.updateRefreshToken(req, res, token.refreshToken)
        user = await loginModel.login(req, res)
        res.json({update, token, user})
    }

    async refreshToken(req, res, next) {
        const token = await req.body.refreshToken
        if(!token) return res.sendStatus(401)
        const user = await loginModel.getUserWithToken(req, res, next, token)
        if(!user) return res.sendStatus(403)
        try {
            const decode = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
            const tokens = Login.generateToken(user)
            const update = await loginModel.updateRefreshToken(req, res, tokens.refreshToken)
            res.json(tokens)
        }catch(err){
            res.sendStatus(403)
        }
    }

    async deleteToken(req, res, next) {
        let user = await loginModel.getUserWithId(req, res, next, req._id)
        if(!user) return res.sendStatus(403)
        const update = await loginModel.deleteRefreshToken(req.username)
        user = await loginModel.getUserWithId(req, res, next, req._id)
        res.json(user)
    }

    static generateToken = payload => {
        const {_id, username} = payload
        const accessToken = jwt.sign({_id, username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn:"1m"})
        const refreshToken = jwt.sign({_id, username}, process.env.REFRESH_TOKEN_SECRET, { expiresIn:"2h"})
        return {accessToken, refreshToken}
    }
}

module.exports = new Login