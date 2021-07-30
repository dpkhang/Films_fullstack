const mongoose = require('mongoose');

const connect = async ()=>{
    try {
        await mongoose.connect('')
    }catch(err){
        console.log('connect error');
    }
}

module.exports = { connect };