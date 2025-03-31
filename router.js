/*
Messages are currently hardcoded into the responses. Will change to html pages once connected
to my personal portfolio. Need to change content-type to text/html as well.
*/
function routerResponse(request) {
    const path = request.path.toLowerCase();

    if (path == "/home") {
        return {
            statusCode: 200,
            statusMessage: 'OK',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: 'Welcome to my personal portfolio!'
        };
    } else if (path == "/about") {
        return {
            statusCode: 200,
            statusMessage: 'OK',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: 'Read this page to learn more about me!'
        };
    } else if (path == "/projects") {
        return {
            statusCode: 200,
            statusMessage: 'OK',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: 'This page includes projects I have worked on.'
        };
    } else if (path == "/contact") {
        return {
            statusCode: 200,
            statusMessage: 'OK',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: 'Contact me at natedem@stanford.edu'
        };
    } else {
        return {
            statusCode: 404,
            statusMessage: 'Not Found',
            headers: {
                'Content-Type': 'text/plain'
            },
            body: 'Page not found.'
        };
    }
};

module.exports = routerResponse;