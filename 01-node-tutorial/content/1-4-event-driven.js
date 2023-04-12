//Welcome! Learning about things being emitted still. So far, I have seen the emitters can be turned on. So can servers apparently:
const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)

//server is emitting the req behind the scenes and then is listened for. Go to the Node docs to read about http Class Server and it's event 'request'
//