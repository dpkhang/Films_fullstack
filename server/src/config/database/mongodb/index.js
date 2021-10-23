const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const connect = async ()=>{
    try {
        await mongoose.connect(process.env.CONNECT_STRING_MONGODB,
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        console.log('Connected MongoDB successfully!')
    }catch(err){
        console.log('Connected MongoDB failed!')
    }
}

module.exports = { connect }