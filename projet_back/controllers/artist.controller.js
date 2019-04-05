const _=require("lodash");

const Artist = require('../models/artist.model.js');



// Create and Save a new Artist
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Name) {
        // If Name is not present in body reject the request by
        // sending the appropriate http code
        return res.status(400).send({
            message: 'Name can not be empty'
        });
    }
    if (!req.body.Birth) {
        return res.status(400).send({
            message: 'Birth can not be empty'
        });
    }
    if (!req.body.Followers) {
        return res.status(400).send({
            message: 'Followers can not be empty'
        });
    }
    if (!req.body.Album) {
        return res.status(400).send({
            message: 'Albums can not be empty'
        });
    }

    // Create a new artist
    const artists = new Artist({
        Name: req.body.Name,
        Birth: req.body.Birth,
        Followers: req.body.Followers,
        Album: req.body.Album || ''
    });

    // Save artist in the database
    artists
        .save()
        .then(data => {
            // we wait for insertion to be complete and we send the newly artist integrated
            res.send(data);
        })
        .catch(err => {
            // In case of error during insertion of a new artist in database we send an
            // appropriate message
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Artist.'
            });
        });
};

// Retrieve and return all artists from the database.
exports.findAll = (req, res) => {
    Artist.find()
        .then(artists => {
            res.send(artists);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving artists.'
            });
        });
};

// Find a single artist with a artistId
exports.findOne = (req, res) => {
    Artist.findById(req.params.artistId)
        .then(artists => {
            if (!artists) {
                return res.status(404).send({
                    message: 'artist not found with id ' + req.params.artistId
                });
            }
            res.send(artists);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'artist not found with id ' + req.params.artistId
                });
            }
            return res.status(500).send({
                message: 'Error retrieving artist with id ' + req.params.artistId
            });
        });
};

// Update a artist identified by the artistId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.Name) {
        return res.status(400).send({
            message: 'Name can not be empty'
        });
    }
    if (!req.body.Birth) {
        return res.status(400).send({
            message: 'Birth can not be empty'
        });
    }
    if (!req.body.Followers) {
        return res.status(400).send({
            message: 'Followers can not be empty'
        });
    }
    if (!req.body.Album) {
        return res.status(400).send({
            message: 'Albums can not be empty'
        });
    }


    // Find artist and update it with the request body
    Artist.findByIdAndUpdate(
        req.params.artistId,
        {
            Name: req.body.Name,
            Birth: req.body.Birth,
            Followers: req.body.Followers,
            Album: req.body.Album || ''
        },
        { new: true }
    )
        .then(artists => {
            if (!artists) {
                return res.status(404).send({
                    message: 'artist not found with id ' + req.params.artistId
                });
            }
            res.send(artists);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'artist not found with id ' + req.params.artistId
                });
            }
            return res.status(500).send({
                message: 'Error updating artist with id ' + req.params.artistId
            });
        });
};

// Delete a artist with the specified artistId in the request
exports.delete = (req, res) => {
    Artist.findByIdAndRemove(req.params.artistId)
        .then(artists => {
            if (!artists) {
                return res.status(404).send({
                    message: 'artist not found with id ' + req.params.artistId
                });
            }
            res.send({ message: 'artist deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'artist not found with id ' + req.params.artistId
                });
            }
            return res.status(500).send({
                message: 'Could not delete artist with id ' + req.params.artistId
            });
        });
};

exports.findFollowers = (req, res) => {
    Artist.find({})
        .then(artists => {
            const followersOfArtists = _.map(artists, function(unArtiste){
                var result = _.pick(unArtiste, ['Name', 'Followers']);
                return result;
            })
            res.status(200).json(followersOfArtists);
        })
        .catch(err => {
            res.status(500).json({
                message: err.message || 'Some error occurred while retrieving users.'
            });
        });
};

