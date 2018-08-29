var http = require("http");
var url = require("url")

var httpServer = http.createServer(function(req,res){
  const queryObject = url.parse(req.url, true).query;
  const greeting = queryObject.greeting || 'Default_greeting'
  res.end('This is my first node app ' + greeting);
});

httpServer.listen(8080, function(){
  console.log('server listening on port 8080');
});