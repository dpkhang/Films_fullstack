const mongoose = require('mongoose');

const connect = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://dpkhang:08062000aB@dpkhang.sqkgd.mongodb.net/Films?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log('connect successfully');
    }catch(err){
        console.log('connect error');
    }
}

module.exports = { connect };