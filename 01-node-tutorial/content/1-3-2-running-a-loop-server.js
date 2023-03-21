const http = require('http')

const server = http.createServer((req, res) =>{
console.log('request event')
res.end('hello world from inside of the server!')
})

//the above is displayed at localhost:5000
server.listen(5000, () =>{
    console.log("Server is listening on port : 5000....")
})

//ther server.listen is continually listening for the reqs.