const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer();
server.on('request', (req, res)=>{
  if(req.url==="/" || req.url==="/index"){
    fs.readFile("index.html", (err,data)=>{
      res.writeHead(200, {"Content-type": "text/html"})
      res.write(data);
      res.end()
    })
  } else if (req.url === "/about"){
    fs.readFile("about.html", (err,data)=>{
      res.writeHead(200, {"Content-type": "text/html"})
      res.write(data);
      res.end()
    })
  } else if (req.url==="/contact-me"){
    fs.readFile("contact-me.html", (err,data)=>{
      res.writeHead(200, {"Content-type": "text/html"})
      res.write(data);
      res.end()
    })
  } else {
    fs.readFile("404.html", (err,data)=>{
      res.writeHead(404, {"Content-type": "text/html"})
      res.write(data);
      res.end()
    })
  }
}
)
server.listen(8080)