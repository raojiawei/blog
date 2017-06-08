var express = require('express');

var swig = require('swig');

var app = express();

app.engine('html', swig.renderFile);
app.set('views', './views');
app.set('view engine', 'html');
swig.setDefaults({
	cache: false
});

app.get('/', function(req, res, next) {
	// res.send('<h1>hello world！！！!<h1>');
	res.render('index.html');
});

app.listen(8081);