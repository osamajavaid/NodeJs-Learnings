const http = require('http')

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers)
    res.setHeader("Osama-Data", "text/html")
    res.write('<html>')
    res.write('<head> <title> My Response </title> </head>')
    res.write('<body> <h1> congrates! on your first nodejs response </h1> </body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)