const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
dotenv.config();

let users = [
    {
        userId: 1,
        username: 'John'
    },
    {
        userId: 2,
        username: 'Mary'
    }
]

const route = app =>{
    app.post('/login', (req, res, next)=>{
        const data = req.body.username;
        const user = users.find(user=>user.username === data);
        const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {expiresIn: 30})
        res.json({token: accessToken});
    })
    app.get('/', (req, res, next)=>{
        res.send("Auth Server");
    });
}

module.exports = route;