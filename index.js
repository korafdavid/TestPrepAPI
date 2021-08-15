const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');
var PORT = process.env.PORT || 8080;
var contentType = 'application/json';


var server = http.createServer((req, res) => {
  var e = url.parse(req.url, true);
  var filename = '.' + e.pathname;
  var extensionName = path.extname(filename);
  switch (extensionName) {
    case '.mp3':
      contentType = 'audio/mpeg';
      break;
    case '.gif':
      contentType = 'image/gif';
      break;
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.js':
      contentType = 'test/javascript';
      break;
    case '.mp4':
      contentType = "video/mp4";
      break;
    case '.json':
      contentType = 'application/json';
      break;  
  }
  console.log(contentType);
  var encoding = contentType == 'application/json' ? 'UTF-8' : '';
  fs.readFile(filename, encoding, (err, data) => {
    res.writeHead(200, {'Content-Type': contentType});
    if (err) {
      res.writeHead(404, {'Content-Type': 'Text/HTML'});
      return res.end('error 404 not Found ' + err);
    }
    if (contentType == 'application/json') {
       var ref = JSON.parse(JSON.stringify(data));
       res.end(ref, typeof decoded);
     } else{
    res.end(data);
    }
  });
});
server.listen(PORT, () => { console.log(`server running on ${PORT} ...`) });



var mime = {
  html: 'text/html',
  txt: 'text/plain',
  css: 'text/css',
  gif: 'image/gif',
  jpg: 'image/jpeg',
  png: 'image/png',
  svg: 'image/svg+xml',
  js: 'application/javascript'
};
  //const stat = fs.statSync(filePath);