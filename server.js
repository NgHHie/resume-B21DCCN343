const http = require('http');

const server = http.createServer((req, res) => {
    console.log('run request...');
    res.setHeader('Content-Type', 'text/html');
    res.write('<h3>hello </h3>');
    res.write('<h2>from hiep </h2>');
    res.end();
})

server.listen(3000, 'localhost', () => {
    console.log('node.js server is running on port: 3000');
})
