const jwt = require('jsonwebtoken');
const authToken = require('../middleware/token');
const loginCon = require('../app/controllers/login.controller');

const route = app =>{
    app.post('/login', loginCon.index);
    app.post('/token', loginCon.refreshToken);
    app.delete('/logout', authToken, loginCon.deleteToken);
    app.get('/', (req, res, next)=>{
        res.send("Auth Server");
    });
}

module.exports = route;