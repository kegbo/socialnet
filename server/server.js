var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();

mongoose.connect('mongodb://localhost:27017/socialnet');
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open',function(){

  console.log('dbase is live');

});

app.use('/app', express.static(path.join(__dirname,  '../app')));

app.get('/', function(req,res){

	res.sendFile(path.join(__dirname,  '../index.html'));
});
app.listen('3000',function(){
	console.log("Hello from this side");
});

