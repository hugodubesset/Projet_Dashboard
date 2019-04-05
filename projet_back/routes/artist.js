var express = require('express');
var router = express.Router();
// we import our album controller
var artists = require('../controllers/artist.controller');


router.get('/followers', artists.findFollowers);

/* GET one artist */
router.get('/:artistId', artists.findOne);

/* DELETE  one artist */
router.delete('/:artistId', artists.delete);

/* update  one artist */
router.post('/:artistId', artists.update);

/* create  one artist */
router.put('/', artists.create);

/* GET artists listing. */
router.get('/', artists.findAll);



module.exports = router;