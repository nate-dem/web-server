const routerResponse = require('./router');

function buildHttpResponse(request) {
    const route = routerResponse(request);
    let res = [];

    res.push("HTTP/1.1 " + route.statusCode + " " + route.statusMessage + "\r\n");

    for (let key in route.headers) {
        res.push(`${key}: ${route.headers[key]}\r\n`);
    }

    res.push('\r\n');

    if (route.body) {
        res.push(route.body);
    }

    return res.join('');
};

module.exports = buildHttpResponse;