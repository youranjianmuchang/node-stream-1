const http = require("http")
const fs = require('fs')

const server = http.createServer();

server.on('request', (request, response) => {
    const readStream = fs.createReadStream('./big_file.txt')
    readStream.pipe(response)
})

server.listen('8888')