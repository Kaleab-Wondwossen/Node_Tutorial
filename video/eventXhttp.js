const http = require('http');

//using event emitter API 
const server = http.createServer()
//emits req event 
//the sub , listen and respond to it 

server.on('request', (req,res)=>{
    res.end('Welcome')
    console.log('Received a request 1');
})

server.listen(8000)