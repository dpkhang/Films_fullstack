const Users = require('../../config/schema/user.schema')


const LoginModel = (username, password) => {
    return Users.findOne({username: username})
        .then(user=>{
            if(user.password == password){
                return {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    phoneNumber: user.phoneNumber,
                    image: user.image,
                    token: user.token,
                }
            }else{
                return 0
            }
        })
        .catch((err)=>{
            return err
        })
}

const RegisterModel = (username, password, email) => {
    user = new User({
        username,
        password,
        email
    })
    user.save()
}

module.exports = {
    LoginModel, 
    RegisterModel
}