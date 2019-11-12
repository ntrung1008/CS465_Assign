const express = require ('express');
var bodyParser=require("body-parser");

const server = express();

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json());


server.use(express.static('Week_5'));

server.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  }); 

server.post('/', function(req, res){
   console.log(req.body);
   res.end();}
);

server.listen(3000, function(){
    console.log("Listening on port 3000!")
  });