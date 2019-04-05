const mongoose = require('mongoose');

const tracks = new mongoose.Schema(
    {
        Title1: String,
        Duration: Number,
        Listenings: Number,
        Likes: Number,
        Featuring: String
    },
);

module.exports = mongoose.model('Track', tracks);