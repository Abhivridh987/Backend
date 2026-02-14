const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('response',()=>{
    console.log("Data Received")
})

customEmitter.on('response',()=>{
    console.log('Other Process Going on')
})

customEmitter.emit('response')   // emiiter.emit() shold be after emitter.on()

const http = require('http');

const server = http.createServer()

server.on('request',(req,res)=>{
    console.log('Server Requested')
})

// server.emit('request')   // working event

server.listen(3000);