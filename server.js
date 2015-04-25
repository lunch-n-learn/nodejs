var connect = require('connect');

connect()
 .use(connect.static(__dirname + "/public"))
 .use(function(req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end("Page not found.");
 })
 .listen(8080, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8080/');