const http = require('http')

    // console.log(req.url, req.method, req.headers)
    const server = http.createServer((req, res)=>{
    const url = req.url
    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Routing Request</title></head>')
        res.write('<body><h1>Just post your data and see what happens</h1><form action="/message" method="Post"><input type="text"/> <button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader("Osama-Data", "text/html")
    res.write('<html>')
    res.write('<head> <title> My Response </title> </head>')
    res.write('<body> <span style=color:red>first go to default route</span> <h1> you have been routed but this is not actually a post request, this is just default route </h1> </body>')
    res.write('</html>')
    res.end()
})

server.listen(3000)