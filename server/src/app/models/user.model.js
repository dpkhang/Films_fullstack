const Users = require('../../config/schema/user.schema')
const {conn} = require('../../config/database/mysql')

const Login = (username, password) => {
    return new Promise((resolve, reject) => {
        const query = 'select * from users where username =  ? and password = ?'
        conn.query(query, [username, password], (err, result)=>{
            if(err)
                reject(err)
            else {
                if(result.length > 0)
                    resolve(result[0])
                else
                    resolve(null)
            }
        })
    })
}

const Register = (user) => {
    return new Promise((resolve, reject) => {
        const query = 'insert into users set ?'
        conn.query(query, user, (err, result)=>{
            if(err) {
                reject(err)
            }else {
                resolve(user)
            }
        })
    })
}

const findUserByUsername = (username) =>{
    return new Promise((resolve, reject) => {
        const query = 'select * from users where username = ?'
        conn.query(query, username, (err, result)=>{
            if(err) reject(err)
            else if (result.length > 0) 
                    resolve(result)
                else
                    resolve(null)
        })
    })
}

module.exports = {
    Login,
    Register,
    findUserByUsername,
}