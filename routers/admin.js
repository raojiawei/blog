var express = require('express');

var router = express.Router();

router.use('/admin', function(req, res, ntext) {

	if (!req.userinfo.isAdmin) {


	} 
	
	next();

});

module.exports = router;