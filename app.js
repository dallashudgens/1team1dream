var static = require( 'node-static' ),
	env = require( 'cfenv' ).getAppEnv(),
	port = 1813,
  http = require( 'http' ),
  request = require('request' ),
  express = require('express'),
  bodyParser = require('body-parser'),
  session = require('express-session'),
  router = express.Router(),
	dust = require('express-dustjs');

// config
var app = express();

app.use(express.static('public')); //public


app.engine('dust', dust.engine({
  useHelpers: true
}))
app.set('view engine', 'dust')
app.set('views', './views') //path.resolve(__dirname, './views')

app.get('/', function(req, res){
	res.render('index', {siteTitle: "Team A What"});
});


app.get('/blog', function(req, res){
	res.redirect('/');
});

app.get('/team', function(req, res){
	res.render('team', {siteTitle: "Team About"});
});

app.get('/work', function(req, res){
	res.render('work', {siteTitle: "Team WORK"});
});

app.listen(env.port || port);
console.log("Site locally at: http://localhost:" + env.port || port);
