const loginModel = require('../models/login.model');
const jwt = require('jsonwebtoken');
const authToken = require('../../middleware/token');

class Login {
    async index(req, res, next){
        let user = await loginModel.login(req, res);
        const token = Login.generateToken(user);
        const update = await loginModel.updateRefreshToken(req, res, token.refreshToken);
        user = await loginModel.login(req, res);
        res.json({update, token, user});
    }

    static generateToken = payload => {
        const {_id, username} = payload;
        const accessToken = jwt.sign({_id, username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn:"1m"});
        const refreshToken = jwt.sign({_id, username}, process.env.REFRESH_TOKEN_SECRET, { expiresIn:"2h"});
        return {accessToken, refreshToken};
    }
}

module.exports = new Login;