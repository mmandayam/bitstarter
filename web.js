var express = require('express');
var fs = require('fs');
var index_text = new Buffer(50, "ascii");
var index_text = fs.readFileSync('index.html', function(err,data) {
		 if (err) then err;
		 console.log(data);
});

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World-2!');
    response.send(index_text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
