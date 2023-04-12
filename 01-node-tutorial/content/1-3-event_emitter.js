console.log("Hello world!")
const {readFile} = require('fs')
const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)

console.log(newItems)

//EVENT LOOP PRACTICE!!

console.log("Starting task 1")
readFile('./first.txt', 'utf-8', (err,result) =>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
    console.log('Hey, I have been offloaded by a readFile and should run last!!!')
})

console.log("starting the next task!")
console.log("are we done??!?!")

//ALSO, let's try our own setTimeouts!!
//Even if the setTimeout is set to 0, it will delay. I'm setting it to 3000 bc I like it to dramatically pop up and surprise me! 🏃‍♀️
console.log("FIRST in the setTimeout!")
setTimeout(() =>{
    console.log("SECOND! But oh no, I'm in timeout. This will not go well for me!")
}, 3000)
console.log('THIRD! But I am sneaky.')


//How it setInterval diff than setTimeout?
//setInterval keeps running in increments and you have to kill it.
//Every two seconds for eternity we will get a message from here. Nah, let's kill this so we don't crash our systems.
setInterval(() => {
    console.log('hello world')
}, 2000)
console.log('I will run first from the setInterval test!!')
//Don't forget to kill the process with control C