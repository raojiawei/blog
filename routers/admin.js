var express = require('express');

var router = express.Router();

router.get('/user', function(req, res, ntext) {

	res.send('bbb');

});

module.exports = router;