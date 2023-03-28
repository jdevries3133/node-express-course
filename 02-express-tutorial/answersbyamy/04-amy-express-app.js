const express = require('express')
//path is a way to send files:
const path = require('path')
const app = express()
//we can use .join or .resolve

//the below sets up the static and middleware with app.use()
//static asset is a file that doesn't need to change
//like all of the static files we use in Flask, images, js, css, 
//we don't have to add content types anymore, express takes care of it for us.
//JS makes things dynamic IN the browser, not in the files. 
//eventually we will work on SSR to do things dynamically with our files.
//static asset = a file that the server doesn't need to change!
//we can put our index.html in the static too.
//it's a root that the users will hit
//
app.use(express.static('./public'))
// app.get('/', (req, res) =>{
//     res.sendFile(path.resolve(__dirnam, './navbar-app/index.html'))
// })


app.all('*', (req, res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000 :)')
})

//we should cover api vs ssr
//api is to set up an api interface using json()
//we send back the response with res.json()
//api use json, send data, res.json()
//we are using api endpoints to learn the clarity of the process for now. will do templates later.
//main idea with api's is that the server provides data and we set up the api and functionality.
//



//we send heavy templates with this!
//ssr- templates, send template, res.render()

