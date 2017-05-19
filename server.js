var express = require('express');
var app = express();

// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;
app.listen(port, function() {
    console.log('Port：' + port);
});

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res){
    res.sendfile('public/index.html');
});
//