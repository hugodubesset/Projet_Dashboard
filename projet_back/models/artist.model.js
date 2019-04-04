const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema(
    {
        Name: String,
        Birth: String,
        Followers: String,
        Albums: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Artist', artistSchema);