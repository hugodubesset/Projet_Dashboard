var express = require('express');
var router = express.Router();
// we import our album controller
var artist = require('../controllers/artist.controller');

/* GET one artist */
router.get('/:artistId', artist.findOne);

/* DELETE  one artist */
router.delete('/:artistId', artist.delete);

/* update  one artist */
router.post('/:artistId', artist.update);

/* create  one artist */
router.put('/', artist.create);

/* GET artists listing. */
router.get('/', artist.findAll);

module.exports = router;