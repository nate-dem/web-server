// file to handle server requests
const httpParser = require("./httpParser");
const buildHttpResponse = require("./responseBuilder");

function handleRequest(data) {
    const request = httpParser(data.toString());
    const response = buildHttpResponse(request);

    return response;
};

module.exports = handleRequest;