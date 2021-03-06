'use strict';

const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {
  console.log('Hello!');
  console.log(req.method, req.url);
  if (req.url === '/style.css') {
    const css = fs.readFileSync('style.css', 'utf8');
    res.end(css);
  } else {
    const html = fs.readFileSync('index.html', 'utf8');
    res.end(html);
  }
});

server.listen(process.env.PORT || 3000);
