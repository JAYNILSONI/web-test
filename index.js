var express = require('express');
var bodyparser = require('body-parser');

var app = express();
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.listen(3000, function(req,res){
    console.log("listing at port 3000");
});