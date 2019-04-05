const Track = require('../models/track.model.js');

// Create and Save a new Track
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Title1) {
        // If Title1 is not present in body reject the request by
        // sending the appropriate http code
        return res.status(400).send({
            message: 'Title1 can not be empty'
        });
    }
    if (!req.body.Duration) {
        return res.status(400).send({
            message: 'Duration can not be empty'
        });
    }
    if (!req.body.Listenings) {
        return res.status(400).send({
            message: 'Listenings can not be empty'
        });
    }
    if (!req.body.Likes) {
        return res.status(400).send({
            message: 'Likes can not be empty'
        });
    }
    if (!req.body.Featuring) {
        return res.status(400).send({
            message: 'Featuring can not be empty'
        });
    }

    // Create a new Track
    const tracks = new Track({
        Title1: req.body.Title1,
        Duration: req.body.Duration,
        Listenings: req.body.Listenings,
        Likes: req.body.Likes,
        Featuring: req.body.Featuring || ''
    });

    // Save Track in the database
    tracks
        .save()
        .then(data => {
            // we wait for insertion to be complete and we send the newly track integrated
            res.send(data);
        })
        .catch(err => {
            // In case of error during insertion of a new Track in database we send an
            // appropriate message
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Track.'
            });
        });
};

// Retrieve and return all Tracks from the database.
exports.findAll = (req, res) => {
    Track.find()
        .then(tracks => {
            res.send(tracks);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving Tracks.'
            });
        });
};

// Find a single Track with a TrackId
exports.findOne = (req, res) => {
    Track.findById(req.params.trackId)
        .then(tracks => {
            if (!tracks) {
                return res.status(404).send({
                    message: 'Track not found with id ' + req.params.trackId
                });
            }
            res.send(tracks);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Track not found with id ' + req.params.trackId
                });
            }
            return res.status(500).send({
                message: 'Error retrieving Track with id ' + req.params.trackId
            });
        });
};

// Update a Track identified by the trackId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.Title1) {
        return res.status(400).send({
            message: 'Title1 can not be empty'
        });
    }
    if (!req.body.Duration) {
        return res.status(400).send({
            message: 'Duration can not be empty'
        });
    }
    if (!req.body.Listenings) {
        return res.status(400).send({
            message: 'Listenings can not be empty'
        });
    }
    if (!req.body.Likes) {
        return res.status(400).send({
            message: 'Likes can not be empty'
        });
    }
    if (!req.body.Featuring) {
        return res.status(400).send({
            message: 'Featuring can not be empty'
        });
    }

    // Find Track and update it with the request body
    Track.findByIdAndUpdate(
        req.params.trackId,
        {
            Title1: req.body.Title1,
            Duration: req.body.Duration,
            Listenings: req.body.Listenings,
            Likes: req.body.Likes,
            Featuring: req.body.Featuring || ''
        },
        { new: true }
    )
        .then(tracks => {
            if (!tracks) {
                return res.status(404).send({
                    message: 'track not found with id ' + req.params.trackId
                });
            }
            res.send(tracks);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'track not found with id ' + req.params.trackId
                });
            }
            return res.status(500).send({
                message: 'Error updating track with id ' + req.params.trackId
            });
        });
};

// Delete a track with the specified trackId in the request
exports.delete = (req, res) => {
    Track.findByIdAndRemove(req.params.trackId)
        .then(tracks => {
            if (!tracks) {
                return res.status(404).send({
                    message: 'track not found with id ' + req.params.trackId
                });
            }
            res.send({ message: 'track deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'track not found with id ' + req.params.trackId
                });
            }
            return res.status(500).send({
                message: 'Could not delete track with id ' + req.params.trackId
            });
        });
};