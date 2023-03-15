const name = require('./4-names')
const sayHi = require('./utils')
require('./mind-blown')
//look at the above! we aren't invoking/calling this function in repl.js at all. this function was called in the mid-blown file and so it AUTOMAGICALLY runs below with no work from you
//require wraps it in a function and then executes it

const amount = 6
//figure out how many .. and .../ we need for OUR modules.
//imported modules from pre made libraries don't need to the .. and /.

if(amount < 10){
    console.log('small number');
}
else{
    console.log('large number');
}

console.log(`hey it's my first Node app with CTD!!!`)

//to get the above code to run, nagivate to the terminal, and run it in the file using
//node repl.js once in the correct file path
//or we can use the VSCode built in terminal to run our code
//do the same-node repl.js

//there is no window obj in node, bc there is not browser!
//we can use global vars instead! 
//no matter how big/nested app gets, we will always have access to the global vars.
//use them in action to understand them
//__dirname = path to cd
//__filename = file name
//require func to use modules(commonJS)
//module = info about the current module
//process = info about env where the program is being executed

//if you look at process, it's a giant obj blob of data, but it becomes more clear as we progresss.

console.log(__dirname)

//the below will print hello world every second until we stop it
// setInterval(() =>{
//     console.log('hello world')
// }, 1000)
//use control C to kill the above process

//why would we use modules? 
//to build super complex stuff! But easily. 
//Node uses common JS


sayHi("Susan")
//check it out! We can access john and peter as properties bc they're in an obj!
sayHi(name.john)
sayHi(name.peter)
console.log(name)
console.log(sayHi.singlePerson)
console.log(sayHi.items)

//all of our exports do the same things, even if they're coded differently
//modules keep code small and manageable
//modules are encapsulated code. 
//we only share the minimum that we want to.


//node uses common JS under the hood and every file be default is a module. 

//to export a module, set it equal to an export. Or we can export in an obj.


//way smarter people made really coolmdules that we can use 
//-os
//-path
//-fs
//http
//the list of built in modules in Node is giant. A ton of stuff that we can do!
//Let's cover the general stuff and then implement the modules that we can use.

//the Node docs have lots of info on modules and how to use them.
//let's look at some modules!
//