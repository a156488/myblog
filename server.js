const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/html;charset=utf-8')

    let myUrl = url.parse('http://127.0.0.1'+req.url)

    console.log(myUrl)

    res.end()
})

server.listen(3000,'http://127.0.0.1',()=>{
    console.log('服务器运行在127.0.0.1:3000')
})