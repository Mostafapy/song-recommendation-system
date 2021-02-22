const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    singerName: {
        type: String,
        required: true,
    },
    mood: {
        type: String,
        required: true,
    },
    album: {
        type: String,
        required: true,
    },
    ocasion: {
        type: String,
        required: true,
    },
    year: {
       type: Number,
       required: true,
    },
    genre: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Song', SongSchema);