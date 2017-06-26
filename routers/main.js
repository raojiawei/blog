var express = require('express');

var router = express.Router();

router.get('/', function(req, res, ntext) {

	
	res.render('main/index', {
		userinfo: req.userinfo
	});

});

module.exports = router;