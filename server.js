//Module dependencies

var application_root = __dirname, 
	express = require('express'), 
	bodyParser = require('body-parser'), 
	path = require('path'), 
	mongoose = require('mongoose'); 

//Create a server
var app = express(); 

//Where to serve static content
app.use(express.static(path.join(
	application_root, 'site'))); 
	app.use(bodyParser()); 

//Routes
app.get('/api', function(request, response) {
	response.send('Library API is running'); 
}); 

//Start server
var port = 4711; 

app.listen(port, function() {
	console.log('Express server listening on port %d in %s mode', port, app.settings.env ); 
})