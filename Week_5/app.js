const express = require ('express');
const path = require('path')

const server = express();


server.use(express.static('Week_5'));

server.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
  }); 


server.listen(3000, function(){
    console.log("Listening on port 3000!")
  });