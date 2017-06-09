var express = require('express');

var router = express.Router();

router.get('/api', function(req, res, ntext) {

	res.send('api');

});

module.exports = router;