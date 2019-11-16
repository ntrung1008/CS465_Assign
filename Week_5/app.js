const express = require ('express');
var bodyParser=require("body-parser");

const server = express();

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json());



server.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  }); 

server.post('/post', function(req, res){
   console.log(req.body);
   res.end();}
);

server.listen(3000, function(){
    console.log("Listening on port 3000!")
  });