const http = require('http');

http.createServer((req, res) => {
  res.end("Hello Version 1");
}).listen(3000);