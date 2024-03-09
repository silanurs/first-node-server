const http = require('node:http');
const fs = require('node:fs');


const server = http.createServer();
server.on('request', (req, res)=>{
  const fileName=req.url==="/" || req.url ==="/index" ? "index.html" :
   req.url==="/about" ? "about.html" : req.url==="/contact-me" ? "contact-me.html" : "404.html"
   fs.readFile(fileName, (err,data) =>{
    res.writeHead(200, {"Content-type": "text/html"})
    res.write(data);
    res.end()
   })
}
)
server.listen(8080)