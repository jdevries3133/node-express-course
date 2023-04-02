//Instead, do this:
const logger = (req, res, next) =>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time)
    //add this below for the "next" part
    // res.send('Testing!') OR
    next()
}
//when we work with MW, we must pass it on to the next MW, or be stuck spinning 
//in my MW function above, or anywhere really, I guess, I can choose to res.send("hi") something to the user as my res, or I can send them on to the next(), but it is crucial to do one or the other!

module.exports = logger