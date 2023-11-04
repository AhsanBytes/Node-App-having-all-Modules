const express = require("express")
const routers = express.Router()
const path = require("path")

routers.get("/",(req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","Files","course.html"))
})

module.exports = routers