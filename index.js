var express = require('express')
  , app = express()
  , doT = require('express-dot')
  , pub = __dirname+'/public'
  , view = __dirname+'/views';

app.configure(function(){
	app.set('views', __dirname+'/views');
	app.set('view engine', 'dot');
	app.engine('html', doT.__express);
	app.use('/css',express.static(__dirname+'/public/css'));
	app.use('/img',express.static(__dirname+'/public/img'));
	app.use('/js',express.static(__dirname+'/public/js'));
});

app.get('/', function(req, res){
	var templateData = {title: "This title is from the template data JSON object"};
	res.render('index.html', templateData);
});

app.listen(8000);