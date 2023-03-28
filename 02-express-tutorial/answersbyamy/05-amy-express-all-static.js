const express = require('express')
const app = express()
//here we are destructuring
const { products } = require('./data')

// app.get('/', (req, res) =>{
//     res.json[{name:'john'}, {name:'susan'}]
// })

//once we grab our destructured data, we can use it on the front end to do stuff. The content type in the network tab is correctly set up for us as application.json()
//let's do some fun more advanced things
//cover route params and query string params
// app.get('/', (req, res) => {
//   res.json(products)
// })

//in the below, we need to use res.send instead of res.json() like above
app.get('/', (req, res) => {
  res.send('<h1>Home page for the user! </h1> <a href="/api/products"> Products </a>')
})
//when we are requesting a whole bunch of data, like a whole collection, we need to be able to only grab certain pieces.
//there are cases where we only want a minimal response initially, then all of it later. 

app.get('/api/products', (req, res) =>{
    const newProducts = products.map((product) =>{
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProducts)
})


//can't set up single parameters like below because if we have hundreds of products, we don't want to have to do the below for each of them. Also...I think that the inventory of products would ebb and flow, so out of stock items would be difficult to have to monitor and change this for.
// app.get('/api/products/1', (req, res) =>{
//     const singleProduct = products.find((product) => product.id ===1)
//     res.json(singleProduct)
// })

//below, we can call the query param anything we want. Could go with productID, but for demo's sake, I'm choosing chickenBurrito because it was the first thing the instructor suggested
app.get('/api/products/:chickenBurrito', (req, res) =>{
    // console.log(req)
    // console.log(req.params)
    const {chickenBurrito} = req.params;
    //the above is a string! Search like this = no product. Do a type conversion on the id in the var below
    const singleProduct = products.find((product) => product.id === Number(chickenBurrito))

    if(!singleProduct){
        return res.status(404).send("Product does not exist! :(")
    }
    res.json(singleProduct)
})

//route params can get very confusing!
//pay close attention to things like reviews vs review.
//usually used to query db or filter results.

//let's sort some stuff! Based on maybe a search or some other param
//be sure that we use the correct keys and values with our query string params.
//look for a prop of the req obj and then search for that thing in particular
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    //we are looking for the two below specific keys
    const { search, limit } = req.query
    let sortedProducts = [...products]
  
    //see if what we are looking for is in the search
    //if the product begins with our search, return it!
    if (search) {
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search)
      })
    }

    
    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    if (sortedProducts.length < 1) {
      // res.status(200).send('no products matched your search');


      return res.status(200).json({ sucess: true, data: [] })
    }
    res.status(200).json(sortedProducts)
  })
  //if you have if/else in JS, and then omit a return, you will get an error! JS requires for you to only get one response returned as a req. Not a product and then a return. 
  //when setting up conditions, always, always go with a return! We will be returning from our CB function and avoid errors.

  //won't usually set up a new app.get() just for a product, you'll do them together.

app.get('/api/products/:chickenBurrito/reviews/:reviewID', (req, res) =>{
    console.log(req.params)
    res.send('hello world!!')
})


//url params are ways to send small bits of info to the server using the URL

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})