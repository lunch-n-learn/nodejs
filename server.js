var http = require('http');

var html =
"<html>" +
"<head>" +
"</head>" +
"  <body>" +
"    <p>Hello,</p>" +
"    <p>World</p>" +
"  </body>" +
"</html>";

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(html);
}).listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');