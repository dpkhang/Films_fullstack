const jwt = require('jsonwebtoken');

const authenToken = (req, res, next) => {
    const authTokenHeader = req.headers.authorization;
    // Bearer [token] 
    const token = authTokenHeader && authTokenHeader.split(' ')[1];
    if(!token){
        res.redirect('http://localhost:4000');
        return res.sendStatus(401);
    }
    try {
        const decode = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        console.log(decode);
        next();
    }catch(err) {
        console.error(err);
        res.sendStatus(403);
    }
}

module.exports = authenToken;