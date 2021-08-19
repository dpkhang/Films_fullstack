const mongoose = require('mongoose');
const schema = mongoose.Schema;

const user = new schema({
    username: {type: String, maxLength: 128},
    password: {type: String, maxLength: 128},
    token: {type: String, maxLength: 2048}
})

module.exports = mongoose.model('User', user, 'Users');