var http = require('http');

var server = http.createServer(function(req,res){

  res.writeHead(200,{'contentType' : 'text/plain'});

  res.end("Hi brues");
});

server.listen(3000,'localhost');
