const User = require('../models/user.model.js');

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.firstName) {
        // If firstName is not present in body reject the request by
        // sending the appropriate http code
        return res.status(400).send({
            message: 'first name can not be empty'
        });
    }

    // Create a new User
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName || ''
    });

    // Save User in the database
    user
        .save()
        .then(data => {
            // we wait for insertion to be complete and we send the newly user integrated
            res.send(data);
        })
        .catch(err => {
            // In case of error during insertion of a new user in database we send an
            // appropriate message
            res.status(500).send({
                message: err.message || 'Some error occurred while creating the User.'
            });
        });
};

// Retrieve and return all Users from the database.
exports.findAll = (req, res) => {
    User.find()
        .then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Some error occurred while retrieving users.'
            });
        });
};

// Find a single User with a UserId
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            return res.status(500).send({
                message: 'Error retrieving user with id ' + req.params.userId
            });
        });
};

// Update a User identified by the UserId in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.firstName) {
        return res.status(400).send({
            message: 'first name can not be empty'
        });
    }

    // Find user and update it with the request body
    User.findByIdAndUpdate(
        req.params.userId,
        {
            title: req.body.firstName,
            content: req.body.lastName || ''
        },
        { new: true }
    )
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            res.send(user);
        })
        .catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            return res.status(500).send({
                message: 'Error updating user with id ' + req.params.userId
            });
        });
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            res.send({ message: 'User deleted successfully!' });
        })
        .catch(err => {
            if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: 'User not found with id ' + req.params.userId
                });
            }
            return res.status(500).send({
                message: 'Could not delete user with id ' + req.params.userId
            });
        });
};