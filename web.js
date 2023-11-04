import fs from "fs"
import express from "express"
import { get } from "http"
const temp = express()

const port = process.env.PORT || 3000

temp.get("/", (req,res)=>{
    res.statusCode = 200
    res.setHeader("Content-Type", "text/html")
    const data = fs.readFileSync("index.html")
    res.send(data.toString())
})

temp.listen(port, ()=>{
    console.log("Server si listening on port: ", {port})
})
// "start": "nodemon web.js" //if we write npm start in terminal then web.js file will run, we have to add this in json file
// module.exports = {
//     name: get,
//     data: "Hello",
// }
//module.exports.name = get
//exports.name = get

//const server = http.createServer((req,res)=>{

    // if(req.url == "/"){
    //     res.statusCode = 200
    //     const data = fs.readFileSync("index.html")
    //     res.end(data.toString())
    //     const method = req.method
    // }
    // else if(req.url == "/asd"){
    //     res.statusCode = 200
    //     res.setHeader("Content-Type", "text/html")
        // res.write("<head><title>My First Page</title></head><body>
        // <form> action = "/file" 
        //     method = "POST"
        //     name = "msg"
        //     <input type = "text"
        //     name = "msg"
        //     </form></body>")
    //     res.end()
    // }
    // else if(url === "/file" && method === "POST")
    // {
    //     const body = []
    //     req.on("data", (chunk)=>{
    //         console.log(chunk)
    //         body.push(chunk)
    //     })
    //     req.on("end",()=>{
    //         const parsedbody = Buffer.concat(body).toString()
    //         const message = parsebody.split("=")[1]
    //         fs.writeFileSync("NwFile.txt",message)
    //     })
    // }
    // else if(req.url == "/file"){
    //     res.readFileSync("index.html")
    //     res.statusCode = 302
    //     res.setHeader("Location", "/")
    //     return res.end()
    // }
    // else
    // {
    //     res.statusCode = 404
    //     res.setHeader("Content-Type", "text/html")
    //     res.end("Not Found")
    // }
//})

// server.listen(port, ()=>{
//     console.log("Server is litening on port", {port})
// })