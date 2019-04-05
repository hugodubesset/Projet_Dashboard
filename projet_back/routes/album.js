var express = require('express');
var router = express.Router();
// we import our album controller
var albums = require('../controllers/album.controller');

/* GET one album */
router.get('/:albumId', albums.findOne);

/* DELETE  one album */
router.delete('/:albumId', albums.delete);

/* update  one album */
router.post('/:albumId', albums.update);

/* create  one album */
router.put('/', albums.create);

/* GET albums listing. */
router.get('/', albums.findAll);

module.exports = router;