const users = require('../../config/schema/user.schema');

class Login{
    login(req, res) {
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
        users.updateOne({username: req.body.username}, {token: refreshToken})
            .then(()=>{
                return new Promise(resolve=>{
                    resolve("Success");
                })
            })
            .catch(err=>{
                return res.status(500).json('Server is not found!');
            })
    }

    deleteRefreshToken(username) {
        return users.updateOne({username: username}, {token: null})
            .then(()=>{
                return new Promise(resolve=>{
                    resolve("Success");
                })
            })
            .catch(err=>{
                return res.status(500).json('Server is not found!');
            })
    }

    getUserWithToken(req, res, next, refreshToken) {
        return users.findOne({token: refreshToken})
                    .then(user => user)
                    .catch(err=>res.status(403).send(err));
    }

    getUserWithId(req, res, next, id) {
        return users.findOne({_id: id})
                    .then(user=> user)
                    .catch(err => res.status(403).send(err));
    }
}

module.exports = new Login;