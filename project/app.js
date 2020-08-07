const http = require('http')
const port = 3000
var momment = require("moment")
var response = {"username":"galihsatriawan"}
var welcome = require('./welcome')

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(response));
    res.end()
}).listen(port,()=>{
    console.log("App is running in port "+port)
    console.log(welcome.message())
    console.log(momment().format("MMMM D, YYYY h:mm:ss"))
})