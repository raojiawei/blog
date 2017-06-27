var express = require('express');

var router = express.Router();

router.use('/', function(req, res, ntext) {
	
	res.render('admin/index', {
		userinfo: req.userinfo
	});

});


module.exports = router;