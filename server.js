const http = require('http');
const express = require('express');
const fs = require('fs')
const path = require('path');

//const collectionspage = require(path.resolve('/images', 'collectionspage.jpg'));
//const twilio_voice_instance = new twilio_voice();

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('collectionspage.jpg').pipe(res)
})

server.listen(process.env.PORT || 3000)
