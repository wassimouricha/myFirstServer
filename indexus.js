let http = require('http')
let fs = require('fs')

let url = require('url')

let server = http.createServer()

server.on('request' , (request,response) => {

    response.writeHead(200)
    let  query =  url.parse(request.url,true).query
    if (query.name === undefined) {
        response.write('bonjour anonyme')
    } else {
        response.write('bonjour ' +  query.name)
    }
    response.end()


    // fs.readFile('index.html', (err,data) => {
    //     if (err) {
    //         response.writeHead(404)
    //         response.end("ce fichier n'existe pas")
    //     }
    //     else{
    //     response.writeHead(200, {
    // //         'content-type': 'text/html; charset=utf-8'
    // //     } )

    // //     response.end(data)}
    // //     })

    })



    server.listen(8070)