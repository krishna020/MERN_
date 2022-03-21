const http = require('http')
const path = require('path')
const fs = require('fs')
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    //console.log(req.url)
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.url === '/') {

        fs.readFile(path.join(__dirname, 'test1', 'index.html'), (err, data) => {
            if (err) {
                console.log('error')
            }
            else {
                res.end(data)
            }
        })
    }
    else{
        fs.readFile(path.join(__dirname, 'test1', 'about.html'), (err, data) => {
            if (err) {
                console.log('error')
            }
            else {
                res.end(data)
            }
        })

    }

    //Syntax: condition ? <expression if true> : <expression if false>

})

server.listen(port, () => {
    console.log('port is connected : ' + port)
})