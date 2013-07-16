var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var filename = 'index.html';
  var contents = fs.readFileSync(filename);
  response.send(contents);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
