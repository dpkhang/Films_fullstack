const jwt = require('jsonwebtoken')
const dotenv = require('dotenv');
const authToken = require('../middleware/token');
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
let films = [
    {
        id: 1,
        name: "naruto",
    },
    {
        id: 2,
        name: "one piece"
    },
    {
        id: 3,
        name: "fairy tail"
    }
]

const route = app=>{
    app.post ('/login', (req, res, next)=>{
        const data = req.body.username;
        const user = users.find(user=>user.username === data);
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30s'})
        res.json(accessToken);
    })
    app.get('/', authToken, (req, res)=>{res.json(films)});
}

module.exports = route;