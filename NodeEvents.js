//import * as Event from "node:events"
//const Event = require("events")
import EventEmitter from "events"

//class emitter extends EventEmitter {}

const temp = new EventEmitter()

temp.on("Study Time", ()=>{ console.log("Its time to study, The trouble is you think you have time")})

temp.emit("Study Time")

console.log("event called")
