var express= require('express');
var app= express();
var mongoose = require('mongoose');
var config=require('./config/database');
var path= require('path');

mongoose.Promise=global.Promise;
//ovde prakticno importujem taj fajl database.js iz configa

mongoose.connect(config.uri, function(err) {
    if (err)
    {
        console.log('Could NOT connect to database: ', err);
    } else{
       
        console.log('Connected to database ' , config.db);
    }
} );

app.use(express.static(__dirname + 'client/dist/'));
app.get('*', function(req,res ){

    res.sendFile(path.join(__dirname +'/client/dist/index.html'));
    
});

app.listen(3000, function(){
    console.log('listening on port 3000');
});