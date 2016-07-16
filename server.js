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

//TABLE API

var tables = [{
		routeName: "yoda",
		name: "Yoda",
		role: "Jedi Master",
		age: 900,
		forcePoints: 2000		
	}];

//STAR WARS CODE EXAMPLE
// Search for Specific Character (or all characters) - provides JSON

// app.get('/api/:tables?', function(req, res){

// 	var chosen = req.params.characters;

// 	if(chosen){
// 		console.log(chosen);

// 		for (var i=0; i <characters.length; i++){

// 			if (chosen == characters[i].routeName){
// 				res.json(characters[i]);
// 				return;
// 			}
// 		}

// 		res.json(false);
// 	}

// 	else{
// 		res.json(characters);
// 	}
// })

// // Create New Characters - takes in JSON input
// app.post('/api/new', function(req, res){

// 	// req.body hosts is equal to the JSON post sent from the user
// 	var newcharacter = req.body;

// 	console.log(newcharacter);

// 	// We then add the json the user sent to the character array
// 	characters.push(newcharacter);

// 	// We then display the JSON to the users
// 	res.json(newcharacter);
// })
