const http = require('http')
const fs = require('fs')
const twilio_voice = require('teneo-web-chat.js');

const twilio_voice_instance = new twilio_voice();
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('collections_demo.html').pipe(res)
})

server.listen(process.env.PORT || 3000)
