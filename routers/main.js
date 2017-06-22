var express = require('express');

var router = express.Router();

	console.log('ccccccccccccccccccccccc');


router.get('/', function(req, res, ntext) {

	console.log(req.userInfo);

	res.render('main/index', {
		userInfo: req.userInfo
	});

});

module.exports = router;