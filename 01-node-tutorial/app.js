const http = require('http');

const server = http.createServer((req, res) => {
    res.write('Welcome to the our page');
    res.end();
})
server.listen();


