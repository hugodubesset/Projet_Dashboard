const mongoose = require('mongoose');

const albums = new mongoose.Schema(
    {
        Title: String,
        Release: Number,
        Genre: String,
        Cover_url: String,
        Tracks: String
    },
);

module.exports = mongoose.model('Album', albums);