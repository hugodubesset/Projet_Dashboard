const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema(
    {
        Title: String,
        Duration: String,
        Listenings: String,
        Likes: String,
        Featuring: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Track', trackSchema);