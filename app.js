var express = require('express');

var swig = require('swig');

var mongoose = require('mongoose')

var app = express();

// console.log(__dirname);

app.use('/public', express.static(__dirname + '/public'));

app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');
swig.setDefaults({
	cache: false
});


// app.get('/', function(req, res, next) {
// 	// res.send('<h1>hello world！！！!<h1>');
// 	res.render('index.html');
// });

// app.get('/main.css', function(req, res, next) {
// 	res.setHeader('content-type', 'text/css');
// 	res.send('body {color:red;}');
// });

app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/main'));

mongoose.connect('mongodb://localhost:27018/blog', function(err) {
	if (err) {
		console.log('fail');
	} else {
		console.log('success');
		app.listen(8081);
	}
});