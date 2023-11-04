const express = require("express")
const app = express()
const port = 3000
const adminroutes = require("./routes/add-course")
const courseroutes = require("./routes/course")
const bodyparser = require("body-parser")
const path = require("path")


app.use(bodyparser.urlencoded({ extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/admin",adminroutes)
app.use(courseroutes)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"Files","error.html"))
})
// app.get("/",(req,res)=>{
//     res.send("Hello World")
// })

// app.get("/about",(req,res)=>{
//     res.send("This is about page")
// })
// //use function run if he sees the route passed, means '/' if he see this route then he will show page if we get another route also
// app.post("/course",(req,res,next)=>{
//     console.log("This will called when post request on course will be called")
//     res.redirect("/") //redirect to main page
// })
// app.use((req,res,next)=>{
//     console.log("Middleware 1")
//     next()
// })

// app.use((req,res,next)=>{
//     console.log("Middleware 2")
//     res.send("<h1>Hello World, Welcome to the Future of World!</h1>")
// })

app.listen(port,()=>{
    console.log("Server is running on port", {port})
})