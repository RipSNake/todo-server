var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// CREATE NEW USER
router.post('/', (req, res, next) => {
  res.send('New User POST');
});

module.exports = router;
