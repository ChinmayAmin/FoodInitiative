var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var resp = {
        'Loaded': true
    };
  res.send(resp);
});

module.exports = router;
