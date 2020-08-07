var http = require("http")
const port = 3000

// Create Server
var server = http.createServer((req,res)=>{
    res.end("hi, Welcome to our jungle");
})
// Set Port
server.listen(port,()=>{
    console.log("App run in port "+port)
})