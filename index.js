var express     =       require('express');
var app         =       express();
var fs          =       require("fs");

app.get('/listusers', function(req,res){
    res.send("hello");
});

app.post('/setlistusers',function(req, res){
    res.send("POST HELLO");
});

app.post('/',function(req, res){
    res.send("POST HELLO");
});

var server      = app.listen(3030,function() {
    
    var host    = server.address().address;
    var port    = server.address().address;
    console.log("Listening on Port number 3030");
});
        