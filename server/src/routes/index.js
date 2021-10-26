const {authToken} = require('../middleware/auth.middleware')
const User = require('../app/controllers/user.controller')

const route = app =>{
    app.post('/api/auth/login', User.Login)
    app.post('/api/auth/register', User.Register)
    app.get('/api/auth', User.findUser)
}

module.exports = route