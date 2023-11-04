import http from "http"
import console from "console"

const port = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    res.end("<h1>this is my first server in nodejs</h1>")
    console.log(req.url, req.method, req.headers)
})

server.listen(port, ()=>{
    console.log('Server is listening on port', {port})
})