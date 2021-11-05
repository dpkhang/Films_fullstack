const middleware = require('../middleware/auth.middleware')
const User = require('../app/controllers/user.controller')

const route = app =>{
    app.post('/api/auth/login', User.Login)
    app.post('/api/auth/register', User.Register)
    app.get('/api/auth/check-token', middleware.authToken, (req, res)=>{
        return res.status(200).json({
            message: 'Authentication successfully',
            data: {
                user: req.user,
            }
        })
    })
    app.get('/api/auth', User.findUser)
}

module.exports = route