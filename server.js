const net = require("net");
const httpParser = require("./httpParser");
const buildHttpResponse = require("./responseBuilder");

function newConn(socket) {
    console.log('new connection', socket.remoteAddress, socket.remotePort);

    socket.on('end', () => {
        console.log('End of File');
    });
    socket.on('data', (data) => {
        const text = data.toString();

        const request = httpParser(text);
        const response = buildHttpResponse(request);
        socket.write(response);

        socket.end();
    });
}

let server = net.createServer();
server.on('error', (err) => { throw err; });
server.on('connection', newConn);
server.listen({host: '127.0.0.1', port: 1234});