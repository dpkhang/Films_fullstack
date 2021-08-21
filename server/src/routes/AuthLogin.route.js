const jwt = require('jsonwebtoken');
const authToken = require('../middleware/token');
const loginCon = require('../app/controllers/login.controller');

const route = (app) =>{
    app.post('/login', loginCon.index);
    app.post('/token', (req, res) => {
        const token = req.body.refreshToken;
        if(!token) return res.sendStatus(401);
        const user = users.find(user=> user.refreshToken === token);
        if(!user) return res.sendStatus(403);
        try {
            const decode = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
            const tokens = generateToken(user);
            updateRefreshToken(user.username, tokens.refreshToken);
            res.json(tokens);
        }catch(err){
            res.sendStatus(403);
        }
    })
    app.delete('/logout', authToken, (req, res) => {
        const user = users.find(user => user.userId === req.userId);
        if(!user) return res.sendStatus(403);
        updateRefreshToken(user.username, null);
        res.json(users);
    })
    app.get('/', (req, res, next)=>{
        res.send("Auth Server");
    });
}

module.exports = route;