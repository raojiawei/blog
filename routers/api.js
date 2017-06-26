var express = require('express');

var router = express.Router();

var User = require('../models/User');

var responseData;

router.use(function(req, res, next) {

	responseData = {
		code: 0,
		message: ''
	};
	next();
});

router.post('/user/register', function(req, res, ntext) {

	var username = req.body.username;
	var password = req.body.password;

	if (username == '') {
		responseData.code = 1;
		responseData.message = 'username is not empty';
		res.json(responseData);
		return;
	}

	if (password == '') {
		responseData.code = 2;
		responseData.message = 'password is not empty';
		res.json(responseData);
		return;
	}

	User.findOne({
		username: username
	}).then(function(userinfo) {
		if (userinfo) {
			responseData.code = 4;
			responseData.message = 'username already register';
			res.json(responseData);
			return;
		} else {
			responseData.code = 5;
			responseData.message = 'username not register';
			res.json(responseData);
		}

		var user = new User({
			username: username,
			password: password
		});

		return user.save();

	}).then(function() {

		responseData.code = 3;
		responseData.message = 'register is success;username:' + username;
		res.json(responseData);
		return;

	});

});



router.post('/user/login', function(req, res, next) {

	var username = req.body.username;
	var password = req.body.password;

	if (username == '') {
		responseData.code = 1;
		responseData.message = 'username is not empty';
		res.json(responseData);
		return;
	}

	if (password == '') {
		responseData.code = 2;
		responseData.message = 'password is not empty';
		res.json(responseData);
		return;
	}

	User.findOne({
		username: username
	}).then(function(userinfo) {
		if (userinfo) {

			responseData.code = 4;
			responseData.message = 'login is success';
			responseData.userinfo = {
				_id: userinfo._id,
				username: userinfo.username
			};


			req.cookies.set('userinfo', JSON.stringify({
				_id: userinfo._id,
				username: userinfo.username
			}));

			res.json(responseData);
			return;

		} else {
			responseData.code = 5;
			responseData.message = 'username or password is wrong ';
			res.json(responseData);
			return;
		}

	});


});



router.get('/user/loginout', function(req, res, next) {

	req.cookies.set('userinfo', null);

	responseData.code = 0;
	responseData.message = 'exit is success';
	res.json(responseData);
});
module.exports = router;