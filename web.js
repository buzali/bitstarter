var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var bufferSize = 100;
  var buff = new Buffer(bufferSize);
  var fd = fs.openSync('index.html','r');
  var read = fs.readSync(fd, buff, 0, bufferSize);
  var resp = buff.toString('utf-8',0,read);
  response.send(resp);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
