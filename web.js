const http = require("http");
const port = 3000
// Make server that return json response

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write('{"username":"galihsatriawan"}');
    res.end();
}).listen(port);
console.log("App is running in port "+port)