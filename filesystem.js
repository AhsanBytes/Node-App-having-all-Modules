import * as fs from 'node:fs';

var temp = fs.writeFileSync('temp.txt', "This is my first file in file system in nodejs")
console.log(temp)

var t = fs.readFileSync('temp.txt')
console.log(t.toString())

fs.writeFile("second.txt", "This is my second file in nodeJS", ()=>{console.log("Data written")})
fs.readFile("second.txt", (err,data)=>{console.log(err,data.toString())})