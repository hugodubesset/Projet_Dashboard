var express = require('express');
var router = express.Router();
// we import our album controller
var album = require('../controllers/album.controller');

/* GET one album */
router.get('/:albumId', album.findOne);

/* DELETE  one album */
router.delete('/:albumId', album.delete);

/* update  one album */
router.post('/:albumId', album.update);

/* create  one album */
router.put('/', album.create);

/* GET albums listing. */
router.get('/', album.findAll);

module.exports = router;