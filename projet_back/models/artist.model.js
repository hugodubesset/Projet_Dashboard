const mongoose = require('mongoose');

const artists = new mongoose.Schema(
    {
        Name: String,
        Birth: Number,
        Followers: Number,
        Album: String
    });

module.exports = mongoose.model('artist', artists);SS