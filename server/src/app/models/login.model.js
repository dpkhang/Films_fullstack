const users = require('../../config/schema/user.schema');


class Login{
    
    async login(req, res) {
        return users.findOne({username: req.body.username})
            .then(user=>{
                if(user.password == req.body.password){
                    return user;
                }else{
                    res.send("Don't find username");
                }
            })
            .catch(()=>{
                res.sendStatus(500);
            })
    }

    updateRefreshToken(req, res, refreshToken) {
        return users.updateOne({username: req.body.username}, {token: refreshToken})
            .then(()=>{
                return new Promise(resolve=>{
                    resolve("Success");
                })
            })
            .catch(err=>{
                return res.status(500).json('Server is not found!');
            })
    }
}

module.exports = new Login;