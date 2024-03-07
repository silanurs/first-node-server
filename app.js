const http = require('http');
const fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile("index.html", (err, data)=>{
    if(err){
      console.error(err);
      return;
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data)
    return res.end()
  })
  console.log(req.url)
 
  if(req.url === "/about"){
    fs.readFile("about.html")}
  if(req.url==="/contact-me"){
    fs.readFile("contact-me.html")
  }
       
}).listen(8080);