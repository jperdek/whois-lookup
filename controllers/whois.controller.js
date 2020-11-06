var databaseConnection = require('../config/db_connection.js');
var express = require("express")

var connection = databaseConnection.getConnection();

connection.connect();

var router = express.Router();


router.get('/search', function (request, response) {
	var searchedString = request.query.domain;
	console.log(request.query.domain);
	connection.one("SELECT * FROM whois WHERE domain_name LIKE '%"+ searchedString +"%' LIMIT 1")
		.then(records => {
			response.render('detail.ejs', { 'data': records });
		})
		.catch(error => {
			console.log("Error: "+error); // print the error;
			response.send("Error: "+error);
	});
});

var fs = require('fs');
router.get('/', function(req, res){
	fs.readFile('./index.html',function(error, content){
		if(error){
			res.writeHead(500);
			res.end();
		} else {
			res.writeHead(200, { 'Content-type': 'text/html' });
			res.end(content, 'utf-8');
		}
	});
});

/*
router.get('/whois', (request, response) => {
	connection.many('SELECT * FROM whois LIMIT 10')
		.then(records => {
			console.log(records);
			response.send(records);
		})
		.catch(error => {
			console.log("Error: "+error); // print the error;
			response.send("Error: "+error);
	});
});
*/

module.exports = router;