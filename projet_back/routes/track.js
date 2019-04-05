var express = require('express');
var router = express.Router();
// we import our track controller
var tracks = require('../controllers/track.controller');

/* GET one track */
router.get('/:trackId', tracks.findOne);

/* DELETE  one track */
router.delete('/:trackId', tracks.delete);

/* update  one track */
router.post('/:trackId', tracks.update);

/* create  one track */
router.put('/', tracks.create);

/* GET tracks listing. */
router.get('/', tracks.findAll);

module.exports = router;