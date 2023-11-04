const express = require("express")
const routers = express.Router()
const path = require("path")

// routers.get("/", (req,res,next)=>{
//     res.send(
//         '<form action = "/course" method = "POST"> <input type = "text" name = "title"> <button type = "submit "> </button> </input> </form>'
//     )})

// routers.post("/course", (req,res,next)=>{
//     console.log(req.body)
//     res.redirect("/")
// })
routers.get("/add-course", (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","Files","add-course.html"))})
//'<form action = "/admin/abc" method = "POST"> <input type = "text" name = "title"> <button type = "submit "> </button> </input> </form>'
routers.post("/add-course", (req,res,next)=>{
    console.log(req.body)
    res.redirect("/")
})
module.exports = routers