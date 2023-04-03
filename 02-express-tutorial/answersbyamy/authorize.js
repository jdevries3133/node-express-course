const authorize = (req, res, next) =>{
    const {user}=req.query
    if(user ==='john'){
        //let's add a prop of user onto the req object
        req.user= {name: 'john', id:3}
        next()
    } else {
        res.status(401).send('Unauthorized')
    }
}
module.exports = authorize

//with the above, to access the pages, we need to pass the url as 5000/?user=john