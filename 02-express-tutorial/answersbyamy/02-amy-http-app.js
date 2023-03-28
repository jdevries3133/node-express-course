const http = require('http')
const {readFileSync} = require('fs');

//get all of the files!!!!!!!
//the below are just variables call them home and about or Bobby Sue and Jack Jack.
//we can use readFileSync bc it is only invoked on the inital serve, not everytime. If we put this in the create server, it would run a lot and be a problem!
// const homePage = readFileSync('./index.html')
const johnsHomePage = readFileSync('./navbar-app/index.html')
//when we serve the above home page from John, it will give us several 404's. Want to know why? In the route, do console.log(url) and it will show us all of the URL's that file is requesting. Now we can see what we need to add in to our taco/burrito.
//Let's create the ability for the browser to get the logo, the css, all of it.
const johnsHomeStyles = readFileSync('./navbar-app/styles.css')
const johnsHomeImage = readFileSync('./navbar-app/logo.svg')
const johnsHomeLogic = readFileSync('./navbar-app/browser-app.js')

const aboutPage = readFileSync('./about.html')
//give it 200, which is the YAY WE DID IT status code. Then pass in a content type. It tells the browser what we are giving it. CSS< HTML, etc
//always call res.end()!!!!! Just do it, remember it.
//if we change the content type to plain, it goes through as text, with the markup on it.
//express will take care of the content type/media type/mime types for us.
//attach a status code to tell the broswer what is up. You can send an else if you want
//Do some research on MIME types. Describe to the browser what you are sending.
//the req (taco) object that we send is massive.
//Let's console.log the method and the url on the taco so that we can see what we are doing for funsies
// const serverButMakeItFun = http.createServer((taco,burrito) =>{
//     console.log(taco)
//     console.log(taco.method, 'Hey there, I am the http method on the taco (req)')
//     console.log(taco.url, 'Hi! From the taco(req) url.')
//     burrito.writeHead(200,{"content-type":"text/html"})
//     burrito.write("<h1>Welcome to the home page!</h1>")
//     console.log("!!!!!!!!!!!!!!!!!!!!!!!")
//     burrito.end()
// })

//let's set up some pages with different statuses. We can add in status messages too. That's fun!
const serverButMakeItFun = http.createServer((taco,burrito) =>{
    const url = taco.url;
    //the below will take the user to the home page
    if(url === '/'){
    burrito.writeHead(200,{"content-type":"text/html"})
    burrito.write(johnsHomePage)
    burrito.end()
    }
    //now let's take the user to an about page
    else if(url === '/about'){
        burrito.writeHead(200,{"content-type":"text/html"})
        burrito.write(aboutPage)
        burrito.end()
    }
    //adding in the extra pages:
    else if(url === '/styles.css'){
        burrito.writeHead(200,{'content-type':'text/css'})
        burrito.write(johnsHomeStyles)
        burrito.end()
    }
    else if(url === '/logo.svg'){
        burrito.writeHead(200,{'content-type':'image/svg+xml'})
        burrito.write(johnsHomeImage)
        burrito.end()
    }
    else if(url === '/browser-app.js'){
        burrito.writeHead(200,{'content-type':'text/javascript'})
        burrito.write(johnsHomeLogic)
        burrito.end()
    }
    //and we better set up the capability to deal with the user requesting something that they can't access. 
    else{
        burrito.writeHead(400,{"content-type":"text/html"})
        burrito.write("<h1>Sorry, the resource you are requesting is not here. Try another page!</h1>")
        burrito.end()
    }
})
serverButMakeItFun.listen(5000)

//we can do lots of fun stuff when setting up our routes. We don't pass in the file itself, we pass in the contents of the file. So we still need the content type. 
//we are now making meaningful HTML pages and then serving them with our server. 


//This is proof that we can set up a whole server with just HTTP modules. Now let's do it with Express though to see how much easier it can be, especially for large code bases.