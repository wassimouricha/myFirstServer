let http = require('http')

let server = http.createServer()

server.on('request' , (request,response) => {

console.log('il y a eu une requete');

})

server.listen(8080)