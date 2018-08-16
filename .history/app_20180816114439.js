const http = require('http')

const server = http.createServer((req,res)=>{
  res.end('李金珂')
})

server.listen(3000)