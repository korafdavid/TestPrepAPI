const http = require('http');
const fs = require('fs');
const url = require('url');
var PORT = process.env.PORT  || 8080;

var server = http.createServer((req,res)=>{
      var e = url.parse(req.url,true);
   var filename = '.'+ e.pathname;
    fs.readFile(filename,'utf8',(err,data) => {
     res.writeHead(201,{'Content-Type':'application/json'});
     if (err) {
       res.writeHead(404, {'Content-Type':'Text/HTML'});
         return res.end('error 404 not Found ' + err);
     }
     var ref = JSON.parse(JSON.stringify(data));
     res.end(ref, typeof decoded);
    });
});
server.listen(PORT, ()=>{console.log(`server running on ${PORT} ...`)});
