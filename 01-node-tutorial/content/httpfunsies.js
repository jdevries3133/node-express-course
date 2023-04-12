//let's get out of the callback mess that the async file made
//Node can help many people very quickly! if tasks take a long time, it can do them async.
//all of our code will revolve around server side, aka the http.
//but we need to know that with the help of http modules, we can get a visual rep of what Node can do for us.
// const http = require('http');
// //req is the incoming req, a client wants to see your page!
// //res is what we send back for them to see.

// const server = http.createServer((req, res) =>{
//     //the below returns a MASSIVE obj of the req
//     // console.log(req)
//     console.log("server running on port 5000, go catch it!")
// res.write('Welcome to our Node homepage!')
// res.end()
// })
// //where the computer will be running locally for out server.
const http = require('http');
//req is the incoming req, a client wants to see your page!
//res is what we send back for them to see.

const server = http.createServer((req, res) =>{

    if(req.url === '/'){
        res.end('Welcome to our home page!')
    }
    if(req.url == '/about'){
        res.end('Here is our short history')
    }
    res.end(
        `<h1>OOPS!</h1> <br/><a href="/">back home</a>`
    )
})
//where the computer will be running locally for out server.
server.listen(5000)
// server.listen(5000)

//let's get the address.
// home is /
//about is /about
