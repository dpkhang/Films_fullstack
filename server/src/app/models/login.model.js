const users = require('../../config/schema/user.schema');


class Login{
    
    updateToken(req, res, next) {
        users.updateOne({username: username}, {token})
            .then(()=>{
                return res.send('update successfully');
            })
            .catch(err=>{
                return res.status(500).json('Server is not found!');
            })
    }
}

module.exports = new Login;