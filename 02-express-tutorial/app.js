//To use the router, change the way that we have coded the routes, then make a route folder, common to call it routes. 

//make routes auth and routes people

const express = require('express')
//we are using a router instance to take care of the routing. 


const consoleLog = require('./answersbyamy/practice-middleware')



const app = express()


const people = require('./answersbyamy/routes/people')
const auth = require('./answersbyamy/routes/auth')
app.use([consoleLog])
// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})


