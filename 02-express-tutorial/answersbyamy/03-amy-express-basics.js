//now that we have struggled through, let's work with Express! It is easy and fast, and will shock us with it's ease. Great docs. 
//expressjs.com
//npm install express --save
const express = require('express');

const app = express()
//we want to be able to do them all, so using a get method. 

app.get('/', (req, res)=>{
    console.log('User found the resource')
    //editing the below:
// res.send('Home Page!')
res.status(200).send('Home Page!')
})

app.get('/about', (req,res) =>{
    console.log('User found the about page')
    res.status(200).send('About page! :)')
})
//we have an object now on app with a BUNCH of useful methods!
//app.get ---read the data
//app.post ----insert the data
//app.put ----update the data
//app.delete ---delete the data
//app.all ----works for all of them!
//app.use ----deals with middleware
//app.listen ----sets up servers
//set the listen with a CL to tell where

//use all bc the user can do multiple things with the HTTP verbs and we want to cover all of them.
app.all('*', (req,res) =>{
    //we want to handle sending the user and the browser the status page, so we are editing our below res.send. and we are chaining the methods. FANCY. 
    // res.send('Error, this page does not exist! :(')
    res.status(404).send('<h1>Error! Page not found :( </h1>')
})
app.listen(5000, ()=>{
console.log('server is listening on port 5000! :)')
})
