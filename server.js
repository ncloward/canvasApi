var connect = require('connect'),
    http = require('http'),
    directory = __dirname;

connect()
    .use(connect.static(directory))
    .listen(8080);

console.log('Listening on port 8080.');