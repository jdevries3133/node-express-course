const { json } = require('express')
const express = require('express')
const app = express()
//destructure right away:
let {people} = require('./data')
//in data.js we are going to be using it's data array

//statuc assets
//grab our express instance and look for the method of static.

//??????Does that mean that Express is a class if we are grabbing an instance of it?
app.use(express.static('./methods-public'))
app.use(express.urlencoded({ extended:false }))
//after we add john's line from above, we now have a decent page to use
//without a small working app like this, we could use postman. go your HTML file and check out the form.
//the form action says where we will send the form. action="/login"
//the value for the method is POST
//sending the form without a route to handle the post login will create an error. 
//in the network tab we can look in headers and see our method. It was not get, it was post. when we send a get req, we don't send a body
//all the way at the bottom, we can see the key value of the body.
// IT IS CRUCIAL to add a post method if sending a body!

//On the form, the name attribute is our key,
//what we put into the form is our value. "Peter", "John" are the values.

//get is the default method
//get is the default method
//get is the default method
//get is the default method
//don't forget that! 🤣

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
  })

//let's send some data!
// app.post('/login', (req, res)=>{
//     res.send('POSTED Your Post')
// })

//even though we are handling the form submission, we aren't doing anything with it.
//fix that with the below line of code to parse the json
app.use(express.json())
//the above is the MW to help handle our info.

app.post('/api/people', (req, res) =>{
    const {name} =req.body
    if(!name){
        return res.status(400).json({success:false, msg:'Please enter your name'})
    }
    res.status(201).json({success:true, person:name})

})
//go send this and then look at the Network tab, you'll see the people.
//axios sends back a giant obj and what we want to grab is the data property. we are grabbing the data.msg from line 77. That is why we can send a msg from our server.

//below, the var name is the KEY and the user's name they enter is the VALUE
app.post('/login', (req, res)=>{
    const { name } = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please enter your name!')
})
//let's check with JS to send the user a message and make sure they are not submitting an empty form. we can check of the front end for sure! But we are learning how to do it here on the server. 

//lets try the js version on the front end. look at the js.html file. there is no method 


//cool, we posted it, but now, we don't really have access to anything we sent. Find a way to fix that
//use the MW!
//use urlencoded MW in the app.use above. pass in the express kv
//the extended false has to do with how we pass in query strings
//editing my above /login route to show another option for it now that we have theMW

//in the js.html, you can see we are using axios with a cdn link. 
//axios, in the js.html is GETting the same api/people route. 
//we are sending the value with axios syntax to send info as a key/value pair. 
//if we are submitting an empty form, we will show an error message.

//FOCUS AND REMEMBER----> an app.get('api/people') IS NOT THE SAME AS AN app.post('api/people')
//Just because the url's are the same, they don't mean the same thing!
//The method is diff. With app.get, we are just reading the data from api/people
//with app.post, we are actually adding the data.
//201 is the response code for success.


//app.use is applying MW to all of our routes. use the methods/public folder here
app.listen(5000, () =>{
    console.log('Server is running on port 5000....')
})

//setting up a front end to test every server route we make is time consuming-we will use Postman as an alternative.
//I already have it set up and have used it before
//