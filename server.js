const net = require("net");
const handleRequest = require("./handleRequest");

function newConn(socket) {
    console.log('new connection', socket.remoteAddress, socket.remotePort);

    socket.on('end', () => {
        console.log('End of File');
    });
    socket.on('data', (data) => {
        const text = handleRequest(data);
        socket.write(response);
        socket.end();
    });
}

let server = net.createServer();
server.on('error', (err) => { throw err; });
server.on('connection', newConn);
server.listen({host: '127.0.0.1', port: 1234});