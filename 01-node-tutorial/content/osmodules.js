const os = require('os')
//this is a built in module so we don't have to specify a file path!
//could do:
//os.---> brings up lots of methods to use on the os
//info about our current user.
const user = os.userInfo()
console.log(user)
//gives us a freaky amount on the user
//this method will return the system uptime in seconds
//creepily stalks the user for how long they've been on
console.log(`The system uptime is ${os.uptime()} seconds`)

const currentOS = {
    name:os.type(), 
    release:os.release(), 
    totalMem:os.totalmem(), 
    freeMem:os.freemem(),
}
console.log(currentOS)

//way more props and methods than this! It just shows some of what we can do.