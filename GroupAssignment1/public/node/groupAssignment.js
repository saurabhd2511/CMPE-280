// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var cors       = require('cors');
var mongo      = require('mongodb' ).MongoClient;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var port = process.env.PORT || 8080;        // set our port

// Connect to the db
mongo.connect("mongodb://localhost:27017/registrationDb", function(err, db) {
                if(err) { return console.dir(err); }
                db.createCollection('registration', function(err, collection) { if(err) { return console.dir(err); } } );
                blogCollection = db.collection('registration');
           } ) ;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/registration)
router.post('/saveBlog', function(req, res) 
{
    console.log( req.body );
		
    if( blogCollection !== null )
    {
        blogCollection.save( req.body, {w:1}, function(err, result) { if(err) { return console.dir(err); } });
        console.log( "New item inserted into registrationDb.registration" );
        res.json({ response: 'Registration Successful!' });
    }
    else
    {
        console.log( "collection is null" );
    	res.json({ response: 'Failed!' }); 
    }
   
});

router.post('/getBlog', function(req, res) 
{
    console.log( req.body );
		
    if( blogCollection !== null )
    {
        res.setHeader("Content-Type", "application/json");

	blogCollection.find( req.body ).toArray( function( err, doc ) {
					 if(err)
					 { 
					     res.write( "{ response: 'Failed!' }"); 
					     res.end();
					     return console.dir(err); 
					 }
					 else
					 {
					     res.write( JSON.stringify( doc ) );
					     res.end();
					     return console.dir(doc); 
					 }
				     } );
        console.log( "Get blog" );
    }
    else
    {
        console.log( "collection is null" );
    	res.json({ response: 'Failed!' }); 
    }
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /blog
app.use('/blog', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Registration Server Port : ' + port);
