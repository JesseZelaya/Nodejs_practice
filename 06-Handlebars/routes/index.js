var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', condition: true, anyArray:[1,2,3] });
});

// adding user details
/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

//localhost:4000/user/detail
router.get('/users/detail', function(req, res, next){
  res.send('respond with a resource: detail')
});
module.exports = router;
