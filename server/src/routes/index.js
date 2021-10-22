const {authToken} = require('../middleware/auth.middleware')
const {Login, Register} = require('../app/controllers/user.controller')

const route = app =>{
    app.post('/api/auth/login', Login)
    app.post('/api/auth/register', Register)
}

module.exports = route