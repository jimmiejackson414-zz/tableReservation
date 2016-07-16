// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'home.html'));
})

app.get('/reserve', function(req, res){
	res.sendFile(path.join(__dirname, 'reserve.html'));
})

app.get('/tables', function(req, res){
	res.sendFile(path.join(__dirname, 'tables.html'));
})

//TABLE API

var tables = [{
		name: 'James',
        phoneNumber: '5127051184',
        eMail: 'hornung.james@gmail.com',
        id: '34'
	}];

//STAR WARS CODE EXAMPLE
// ==============================================


//moving to html page to attach to search button function
app.get('/api', function(req, res){
		console.log('get request sent');
		for (var i=0; i <tables.length; i++){
			res.json(tables[i]);
			console.log('js 56', tables[i]);

			// res.json(false);
	}
})

// // Create New Characters - takes in JSON input
app.post('/api/new', function(req, res){

	// req.body hosts is equal to the JSON post sent from the user
	var newReservation = req.body;
	console.log('js 68', newReservation);

	// We then add the json the user sent to the character array
	tables.push(newReservation);
	console.log('js 72', tables)

	// We then display the JSON to the users
	res.json(newReservation);
})
