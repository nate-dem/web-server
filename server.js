const net = require("net")

function newConn(socket) {
    console.log('new connection', socket.remoteAddress, socket.remotePort);

    socket.on('end', () => {
        console.log('EOF.');
    });
    socket.on('data', (data) => {
        const text = data.toString();
        console.log("Original text: ", text);

        const response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: 13\r\n\r\nHello, world!";
        socket.write(response);

        socket.end();
    });
}

let server = net.createServer();
server.on('error', (err) => { throw err; });
server.on('connection', newConn);
server.listen({host: '127.0.0.1', port: 1234});