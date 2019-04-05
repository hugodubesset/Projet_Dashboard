var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'Welcome on my api_with_mongo api cc c ougo lol x4 !' });
});

module.exports = router;