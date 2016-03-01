var mongoose = require('./config/mongoose'),  
    express = require('./config/express');

var db = mongoose();
var app = express();

app.listen(80);

console.log('Server running at http://localhost:80/');
