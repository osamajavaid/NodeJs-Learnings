const http = require('http')
const fs = require('fs')

    // console.log(req.url, req.method, req.headers)
    const server = http.createServer((req, res)=>{
    const url = req.url
    const method = req.method

    if(url === '/'){
        res.write('<html>')
        res.write('<head><title>Routing Request</title></head>')
        res.write('<body><h1>Just post your data and see what happens</h1><form action="/message" method="Post" name="message"><input type="text"/> <button type="submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    
    if(url === '/message' && method === 'POST'){
        const body = []
        
        req.on('data', (chunk) => {
            console.log('wtf')
            console.log(body)
            console.log(chunk)
            body.push(chunk)
            
        });
        
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
        });

        fs.writeFileSync('message.txt', 'dummy text file')
        res.statusCode = 302
        res.setHeader('Location', '/')
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