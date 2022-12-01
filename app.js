const http = require('http');
const day0 = require('./src/00');
const day1 = require('./src/01');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const url = req.url;

    if (url === '/day00') {
        res.end(day0())
    }

});


server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});