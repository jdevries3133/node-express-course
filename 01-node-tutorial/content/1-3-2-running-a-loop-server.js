// const http = require('http')

// const server = http.createServer((req, res) =>{
// console.log('request event')
// res.end('hello world from inside of the server!')
// })

// //the above is displayed at localhost:5000
// server.listen(5000, () =>{
//     console.log("Server is listening on port : 5000....")
// })

//the server.listen is continually listening for the reqs.

//The flow of the program is determined as events execute.

//Event driven programming is used heavily in Node.JS

//the below is our var and we will get back the event class
const EventEmitter = require('events')

//we can do many methods with this obj, but we are interested in two. 
//on-listen for an event
//emit -emit an event

//we are creating an instance here of an event with this var
const customEmitter = new EventEmitter()

//our event is named response, and it is taking in the CB function to CL our message.
customEmitter.on('response', (name, id)=>{
    console.log(`data received for user ${name} with id: ${id} `)
})
//we can have as many methods as we want!
customEmitter.on('response', ()=>{
    console.log(`some other logic goes here!! `)
})
//did the above run in Nodemon?
//Once we have subscribed to this event, we can emit it:
customEmitter.emit('response', 'john', 34)
//what you'll see in the console is what you put in your custom CB 

//we are creating an instance from the class that we get back from the events module.

//have as many methods as we want. BUT the order matters! We create instance, then listen for it, or multiples, then emit the response.

//can pass in multiple args!  like line 30.
//events are a core building block of Node!

//Guess what! Server also has the method on
//Head to 1-4 to see it