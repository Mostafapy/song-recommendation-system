const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    birthdate: {
        type: Date,
        required: true,
    },
    mood: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('User', UserSchema);