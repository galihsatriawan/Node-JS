const http = require('http')
const port = 3000

var response = {"username":"galihsatriawan"}

http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"application/json"});
    res.write(JSON.stringify(response));
    res.end()
}).listen(port,()=>{
    console.log("App is running in port "+port)
})