var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//localhost:4000/user/detail
router.get('/detail', function(req, res, next){
  res.send('respond with a resource: detail')
});

module.exports = router;
