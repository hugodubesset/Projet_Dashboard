var express = require('express');
var router = express.Router();
// we import our track controller
var track = require('../controllers/track.controller');

/* GET one track */
router.get('/:trackId', track.findOne);

/* DELETE  one track */
router.delete('/:trackId', track.delete);

/* update  one track */
router.post('/:trackId', track.update);

/* create  one track */
router.put('/', track.create);

/* GET tracks listing. */
router.get('/', track.findAll);

module.exports = router;