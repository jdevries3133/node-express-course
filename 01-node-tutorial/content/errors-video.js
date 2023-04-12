//error handling is most often needed with data from other sources or from user input

//try --try something to test a block of code
//catch --catch problems with it, locates it
//throw --throw custom errors
//finally --let you execute code no matter what the result of the try catch is

try{
    console.log('Start of the try');
    unicycle;
    console.log('End of the try is never reached')
} catch (err){
    console.log('Error!  ' + err.stack)
}finally{
    console.log('I am always going to run')
}
console.log('...Then the execution continues')

//you must use valid JS to get this block to work. Try catch only catches run time errors, not parse errors, so code must run to catch!

//we can make custom errors messages.

let json = '{"age":30}';
try{
    let user = JSON.parse(json);
    if(!user.name){
        throw new SyntaxError("Incomplete data: no name")
    }
    console.log(user.name);
} catch(e){
    console.log("JSON Error: " + e.message)
}