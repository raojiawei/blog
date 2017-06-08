var express = require('express');

var swig = require('swig');

var app = express();


console.log(__dirname);


app.use('/public', express.static(__dirname + '/public'));

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

app.get('/main.css', function(req, res, next) {
	res.setHeader('content-type', 'text/css');
	res.send('body {color:red;}');
});

app.listen(8081);