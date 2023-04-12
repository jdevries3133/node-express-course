//this is how we can use mongoose. Require it and then access it by the connect method.
const mongoose = require('mongoose')


//don't forget to edit and pass in real PW in the string. DO NOT PUSH THE PW TO GITHUB!!!!!
//the below would be a dumb way to set this up, so I am removing it. Just leaving it as a note here for future Amy....Don't leave your connectionStrings just lying around!!!
// const connectionString = "

//we can edit and add in a db name. We are calling this one 03-TASK-MANAGER

//the .connect method returns a promise, so we need to use a .then() and a CB function to show that it was successful. Also, after our connection string, we need to pass in some k/v pairs to avoid deprecation warnings.
//it's a good idea to catch any errors as well.

//should we pretty much try to catch errors on everything?


//we need to get our server and db to work together. We want to connect to the db, and if that is successful, THEN we spin up the server. 

//set connect.js up as a function to invoke elsewhere. So comment out the below and refactor

// mongoose.connect(connectionString,{

//     useNewUrlParser: true,
//     useCreateIndex:true, 
//     useFindAndModify:false,
//     useUnifiedTopology:true,
    
    
// }).then(() => console.log('CONNECTED TO THE DB!')).catch((err) => console.log(err))



const connectDB = (url) =>{
    return mongoose.connect(url,{

        useNewUrlParser: true,
        useCreateIndex:true, 
        useFindAndModify:false,
        useUnifiedTopology:true,
        
        
    })
} 

module.exports = connectDB