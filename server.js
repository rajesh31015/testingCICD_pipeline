const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hel33333333333lo dddddddddddddddddfrom Node Server');
});

server.listen(5000, () => {
  console.log('Server running on port 5000');
});

// ci test
