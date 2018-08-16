const http = require('http')

const server = http.createServer((req,res)=>{
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('李金珂')
})

server.listen(3000)