var express = require('express');
var db = require('../database/database');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users');
});

router.post('/', function (req, res, next) {

})

module.exports = router;
