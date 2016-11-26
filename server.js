var express = require('express');

var app = express.createServer(express.logger());

app.use(express.static(__dirname + '/main'));

app.get('/', function(request, response) {
  response.sendfile('main/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("port是 " + port);
});