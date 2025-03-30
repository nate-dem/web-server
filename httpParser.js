function httpParser(text) {
    const res = {}

    const mainSections = text.split("\r\n\r\n");
    const header = mainSections[0];
    const body = mainSections[1];

    const headerSections = header.split("\r\n");
    const request = headerSections[0];

    const [method, path, version] = request.split(" ");
    res.method = method;
    res.path = path;
    res.version = version;
    res.headers = {};

    for (let line of headerSections.slice(1)) {
        const [key, value] = line.split(": ");
        res.headers[key.toLowerCase()] = value.trim();
    };

    if (res.method == "POST") {
        res.body = body;
    };

    return res;
};

module.exports = httpParser;