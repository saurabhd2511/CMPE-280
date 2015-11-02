
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , fs = require('fs')
  , bodyParser = require('body-parser')
  , path = require('path');
var mongoose = require('mongoose');
//Connect to MongoDB
mongoose.connect('mongodb://280:280@ds061641.mongolab.com:61641/assignment2');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("mongodb connected");  
});

var app = express();

var bSchema = new mongoose.Schema({
    bfname: String,
    blname: String,
    bemail: String
});

var wSchema = new mongoose.Schema({
    wfname: String,
    wlname: String,
    wemail: String
});

var bdbregistration = mongoose.model('bdbuser', bSchema);
var bdwregistration = mongoose.model('bdwuser', wSchema);
var iotbregistration = mongoose.model('iotbuser', bSchema);
var iotwregistration = mongoose.model('iotwuser', wSchema);
var mobilebregistration = mongoose.model('mobilebuser', bSchema);
var mobilewregistration = mongoose.model('mobilewuser', wSchema);
// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);
app.get('/users', user.list);

app.use(bodyParser.json());

app.use(express['static'](__dirname + '/../public'));

//get
app.get('/', function(req, res){
  fs.readFile(__dirname + '/public/index.html', 'utf8', function(err, text){
        res.send(text);
    });
});

//Form submissions
//bigdata brochure
app.post('/bdb', function(req, res){
    new bdbregistration({
      bfname: req.body.bfname,
      blname: req.body.blname,
      bemail: req.body.bemail
    }).save(function(err, doc){
      if(err) res.json(err);
      else    res.send('Successfully inserted!');
    });
  });
//bigdata whitepaper
app.post('/bdw', function(req, res){
    new bdwregistration({
      wfname: req.body.wfname,
      wlname: req.body.wlname,
      wemail: req.body.wemail
    }).save(function(err, doc){
      if(err) res.json(err);
      else    res.send('Successfully inserted!');
    });
  });
//iot brochure
app.post('/iotb', function(req, res){
    new iotbregistration({
      bfname: req.body.bfname,
      blname: req.body.blname,
      bemail: req.body.bemail
    }).save(function(err, doc){
      if(err) res.json(err);
      else    res.send('Successfully inserted!');
    });
  });
//iot whitepaper
app.post('/iotw', function(req, res){
    new iotwregistration({
      wfname: req.body.wfname,
      wlname: req.body.wlname,
      wemail: req.body.wemail
    }).save(function(err, doc){
      if(err) res.json(err);
      else    res.send('Successfully inserted!');
    });
  });
//mobile brochure
app.post('/mobileb', function(req, res){
    new mobilebregistration({
      bfname: req.body.bfname,
      blname: req.body.blname,
      bemail: req.body.bemail
    }).save(function(err, doc){
      if(err) res.json(err);
      else    res.send('Successfully inserted!');
    });
  });
//mobile whitepaper
app.post('/mobilew', function(req, res){
    new mobilewregistration({
      wfname: req.body.wfname,
      wlname: req.body.wlname,
      wemail: req.body.wemail
    }).save(function(err, doc){
      if(err) res.json(err);
      else    res.send('Successfully inserted!');
    });
  });

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
