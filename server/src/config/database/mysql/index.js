const mysql = require('mysql')
const dotenv = require('dotenv')
dotenv.config()
const conn = mysql.createConnection({
    host: process.env.HOST_MYSQL,
    user: process.env.USER_MYSQL,
    password: process.env.PASSWORD_MYSQL,
    database: process.env.DATABASE_MYSQL,
    port: process.env.PORT_MYSQL,
})

const connect = ()=>{
    conn.connect((err)=>{
        if(err) {
            console.log('Connected mysql failed!');
            console.error(err);
            process.exit(1);
        }
        console.log('Connected mysql successfully!')
    })
}

module.exports = {
    conn,
    connect
}