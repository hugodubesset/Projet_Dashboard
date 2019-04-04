const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema(
    {
        Title: String,
        Release: String,
        Genre: String,
        Cover_url: String,
        Tracks: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Album', albumSchema);