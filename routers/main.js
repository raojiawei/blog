var express = require('express');

var router = express.Router();

router.get('/', function(req, res, ntext) {

	res.send('main');

});

module.exports = router;