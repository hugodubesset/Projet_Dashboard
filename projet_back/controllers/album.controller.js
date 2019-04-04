const Album = require('../models/album.model.js');

// Create and Save a new Album
exports.create = (req, res) => {
    // Validate request
    if (!req.body.Title) {
        // If Title is not present in body reject the request by
        // sending the appropriate http code
        return res.status(400).send({
            message: 'Title can not be empty'
        });
    }
    if (!req.body.Release) {
        return res.status(400).send({
            message: 'Release can not be empty'
        });
    }
    if (!req.body.Genre) {
        return res.status(400).send({
            message: 'Genre can not be empty'
        });
    }
    if (!req.body.Cover_url) {
        return res.status(400).send({
            message: 'Cover_url can not be empty'
        });
    }
    if (!req.body.Tracks) {
        return res.status(400).send({
            message: 'Tracks can not be empty'
        });
    }

    // Create a new Album
    const album = new Album({
        Title: req.body.Title,
        Release: req.body.Release,
        Genre: req.body.Genre,
        Cover_url: req.body.Cover_url,
        Tracks: req.body.Tracks || ''
    });

    // Save Album in the database
    album.save().then(data => {
            // we wait for insertion to be complete and we send the newly album integrated
            res.send(data);
        })
        .catch(err => {
            // In case of error during insertion of a new album in database we send an
            // appropriate message
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the Album.'
            });
        });
};

// Retrieve and return all Albums from the database.
exports.findAll = (req, res) => {
    Album.find()
        .then(album => {
            res.send(album);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving albums.'
            });
        });
};

// Find a single Album with a AlbumId
exports.findOne = (req, res) => {
    Album.findById(req.params.albumId)
        .then(album => {
            if (!album) {
                return res.status(404).send({
                    message: 'Album not found with id ' + req.params.albumId
                });
            }
            res.send(album);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Album not found with id ' + req.params.albumId
                });
            }
            return res.status(500).send({
                message: 'Error retrieving album with id ' + req.params.albumId
            });
        });
};

// Update a Album identified by the albumId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.Title) {
        return res.status(400).send({
            message: 'Title can not be empty'
        });
    }
    if (!req.body.Release) {
        return res.status(400).send({
            message: 'Release can not be empty'
        });
    }
    if (!req.body.Genre) {
        return res.status(400).send({
            message: 'Genre can not be empty'
        });
    }
    if (!req.body.Cover_url) {
        return res.status(400).send({
            message: 'Cover_url can not be empty'
        });
    }
    if (!req.body.Tracks) {
        return res.status(400).send({
            message: 'Tracks can not be empty'
        });
    }

    // Find album and update it with the request body
    Album.findByIdAndUpdate(
        req.params.albumId,
        {
            Title: req.body.Title,
            Release: req.body.Release,
            Genre: req.body.Genre,
            Cover_url: req.body.Cover_url,
            Tracks: req.body.Tracks || ''
        },
        { new: true }
    )
        .then(album => {
            if (!album) {
                return res.status(404).send({
                    message: 'Album not found with id ' + req.params.albumId
                });
            }
            res.send(album);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'Album not found with id ' + req.params.albumId
                });
            }
            return res.status(500).send({
                message: 'Error updating album with id ' + req.params.albumId
            });
        });
};

// Delete a Album with the specified AlbumId in the request
exports.delete = (req, res) => {
    Album.findByIdAndRemove(req.params.albumId)
        .then(album => {
            if (!album) {
                return res.status(404).send({
                    message: 'Album not found with id ' + req.params.albumId
                });
            }
            res.send({ message: 'Album deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'Album not found with id ' + req.params.albumId
                });
            }
            return res.status(500).send({
                message: 'Could not delete album with id ' + req.params.albumId
            });
        });
};