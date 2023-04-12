//middleware are functions that run in the req on the server. 
//Let's do some real code examples to see what we can do with MW.
//MW is everywhere in Express, at the heart and soul of it.

const express = require('express')
const app = express()

const logger = require('./08-5-mw-logger')
//MW sits betweent the req and res

//req => MW => res

//the below is a handy way to see when the users are accessing the site, BUT gets repetitive. Say we have 15 routes, we don't want to c/p the method, url, time, console.log into all of them.
//Let's set up a function to attach all of this to our chosen routes for it.
//Below is the before, see all of the code we would have to hard code into each function?
// app.get('/', (req, res) =>{
//     const method = req.method;
//     const url = req.url;
//     const time = new Date().getFullYear();
//     console.log(method, url, time)
//     res.send('Home')
// })


//look below! req-->MW-->res.
//do not invoke the function in the callback below, just reference it!

//keeps app.js cleaner if we add the MW functions to another file and then call them into our functions when wanted.
//But look at all of the times we have to call logger. Not a fan!
// app.get('/',logger, (req, res)=>{
//     res.send('Home')
// })
// app.get('/about',logger, (req, res)=>{
//     res.send('About')
// })

// app.get('/api/products',logger, (req, res)=>{
//     res.send('These are some cool camp chairs to buy!')
// })
//the below is better!

// app.use(logger)
//can set it to only apply to certain routes
//omit the below path and it will apply to all!
app.use('/api', logger)
//the order VERY MUCH MATTERS!!! Put app.use at the top so it will work in order

app.get('/', (req, res)=>{
    res.send('Home')
})
app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/api/products', (req, res)=>{
    res.send('Api')
})
app.listen(5000, () =>{
    console.log('Server is running on port 5000....')
})

