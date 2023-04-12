//local, it's a secret!!
const secret = 'SUPER SECRET'
//share, this is not a secret! let's export it and make it global
const name = ("Amy")
const john = 'john'
const peter = 'peter'
//the below is a giant object!
// console.log(module)
//to access them, go to repl and require them.
//the below sets the exports in an object! you can see if in the CL in the other file when we run it
module.exports = {name, john, peter}