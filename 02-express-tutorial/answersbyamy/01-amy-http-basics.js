//When we use the web, we are looking for the server. We make req to the server, they send us responses. We send an HTTP req. Server sends response. 

//We will use Node and Express to do this. 
//The cloud is a bunch of inter connected servers that are always available.

//The headers hold the meta info. There is an optional body

//REQ SENT BY THE USER!!!!!!

//RESPONSE SENT BY THE SERVERS!!!!!!!!!

//Req usually has a method with it. 
//HTTP Methods
//Get ----Read data
//Post ----Insert data
//Put ----Update data
//Delete ----Delete data

//When we use the terms methods-we are specifying what we want to do with our req

//  GET IS THE DEFAULT THAT A REQ does
//Headers is optional. Meta info about our req. K/V pairs.
//We don't need to add the headers manually all of the time. We send sometimes as additional info about our message.

//Want to add a resource to the server? YOU NEED TO INCLUDE IT AS A PAYLOAD 

//The response message is what we are creating. The status code shows the status of our response. 200 is good. 400 means req error. The user made an error. 404 is a not found. 401 is unauth req

//The headers give info about our res message. A setup of K/V pairs. Most of the time when we communicate on the web, we send application JSON. Can then send back an arr with a bunch of objs.

//Look in the headers in the dev tools for more info. You can see status codes, req methods, req url's.

//Use the network tab to get the above handy info. Look in the res in the Network tab for a view of the page. 

console.log('Express Tutorial')

//I am going to code here, and then C/P into my files once I ensure that it runs well from here.
//Let's one more time build server with http modules

const http = require('http')
//usually we call the server 'server' but we are proving we can call it anything we want.
//give the below a callback
//we serve the data,
//we can call req and res taco and burrito if we want 
const bunnyBunnyAKATheServer = http.createServer((req, res)=>{
console.log('Server is now running on port 5000. Thank you CTD for helping me!!!!!!!!!!')
res.end('Welcome to the home page 🏠')
})
bunnyBunnyAKATheServer.listen(5000)

//what is port 5000?
//Imagine you call a number and have an issue that you need help with. You get option menu to select from. The port is the same, a communication end point. 
//Diff ports for diff jobs.
//every apt building has the same address, but different apt nums
//each IP address has diff ports you can use.
//once your server is in production, you will use specific ports for specific things. In dev, it's arbitrary which port we use.

//create-react-app usually uses 3000, netlify 8080, 5000 gatsby
//what happens once we deploy? we shall see!

//443 for https/SSL 80 for http

//now we need to send info to the browser. it is response.end

//it must be called on each response. Above, we used a string, but we can pass in HTML.
//every time that the user accesses the server, it will console log the below