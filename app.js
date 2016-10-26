var static = require( 'node-static' ),
	env = require( 'cfenv' ).getAppEnv(),
	port = 1813,
  http = require( 'http' ),
  request = require('request' ),
  express = require('express');
  bodyParser = require('body-parser');
  session = require('express-session');
  router = express.Router();

// config
var app = express();

app.use(express.static('public'));

app.listen(env.port || port);
