const jwt = require('jsonwebtoken');
const authToken = require('../middleware/token');
let users = [
    {
        userId: 1,
        username: 'John',
        refreshToken: null,
    },
    {
        userId: 2,
        username: 'Mary',
        refreshToken: null,
    }
]

function updateRefreshToken(username, refreshToken) {
    users = users.map(user=>{
        if(user.username == username) {
            return {
                ...user,
                refreshToken
            }
        }
        return user;
    })
}

const generateToken = payload => {
    const {userId, username} = payload;

    const accessToken = jwt.sign({userId, username}, process.env.ACCESS_TOKEN_SECRET, { expiresIn:"1m"});
    const refreshToken = jwt.sign({userId, username}, process.env.REFRESH_TOKEN_SECRET, { expiresIn:"2h"});
    return {accessToken, refreshToken};
}

const route = (app) =>{
    app.post('/login', (req, res, next)=>{
        try {
            const data = {username: req.body.username, password: req.body.password};
            const user = users.find(user=> user.username === data.username);
            const token = generateToken(user, jwt);
            updateRefreshToken(user.username, token.refreshToken);
            res.json({token, users});
        }catch(err){
            res.sendStatus(403);
        }
    })
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