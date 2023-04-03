const express = require('express')
const app = express()
//destructure right away:
let {people} = require('./data')
//in data.js we are going to be using it's data array

//statuc assets
//grab our express instance and look for the method of static.

//??????Does that mean that Express is a class if we are grabbing an instance of it?
app.use(express.static('./methods-public'))

//after we add john's line from above, we now have a decent page to use
//without a small working app like this, we could use postman. go your HTML file and check out the form.
//the form action says where we will send the form. action="/login"
//sending the form without a route to handle the post login will create an error. 
//in the network tab we can look in headers and see our method. It was not get, it was post. 
//all the way at the bottom, we can see the key value of the body. IT IS CRUCIAL to add a post method if sending a body!

//what we put into the form is our key. "Peter", "John" are the keys.

//get is the default method
//get is the default method
//get is the default method
//get is the default method
//don't forget that! 🤣

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
  })

//let's send some data!
app.post('/login', (req, res)=>{
    res.send('POSTED')
})
//cool, we posted it, but now, we don't really have access to anything we sent. Find a way to fix that

//app.use is applying MW to all of our routes. use the methods/public folder here
app.listen(5000, () =>{
    console.log('Server is running on port 5000....')
})

