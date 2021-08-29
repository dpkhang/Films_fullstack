const mongoose = require('mongoose');
const schema = mongoose.Schema;

const film = new schema({
    name: {type: String, maxLength: 128},
    author: {type: String, maxLength: 64},
    count: {type: Number},
    price: {type: Number},
})

module.exports = mongoose.model('Films', film, 'Films');
