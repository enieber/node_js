
/**
 * Module dependencies.
 */

  var express = require('express'),
  routes = require('./routes');

  var app = express();
  var express = require('express')
  , load = require('express-load')
  , app = express();
  // ...stack de configurações do servidor...
  load('models')
  .then('controllers')
  .then('routes')
  .into(app);
//module.exports = express.createServer();

// Configuration

//app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/public'));

  //app.use(express.bodyParser());
  
//   app.use(express.methodOverride());
//   app.use(app.router);
//   app.use(express.static(__dirname + '/public'));
// });
  app.get('/', routes.index);
  app.get('/usuarios', routes.user.index);

  app.listen(3000, function(){
    console.log("Ntalk no ar.");
  });

// app.configure('development', function(){
//   app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
// });

// app.configure('production', function(){
//   app.use(express.errorHandler());
// });

// // Routes

// app.get('/', routes.index);

// app.listen(3000, function(){
//   console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
// });
