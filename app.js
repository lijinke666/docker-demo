const http = require('http')

const server = http.createServer((req,res)=>{
  console.log(req.socket.remoteAddress);
  res.end('李金珂')
})

server.listen(3000)