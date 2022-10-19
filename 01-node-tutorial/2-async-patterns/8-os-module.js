const os = require('os');

//info about current name
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} second`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    totaMem: os.totalmem(),  
}
console.log(currentOS);
