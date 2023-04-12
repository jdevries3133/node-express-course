const {readFile, writeFile} = require('fs')

//callback functions like button clicks run when we're ready. this will do the same
//we will run the callback when we're done.
//when our functions are done, the event happens.
//CB runs on button click
//read the file func
// readFile('./first.txt', (err, result)=>{
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log(result)
// })
//if we run the above with no utf encoding, we get a bunchof nums below that are the buffer.
//let's run it below the right way:
readFile('./first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result)
})

//let's do it to write now!
readFile('./first.txt', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
    readFile('./second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err)
            return
        }
        const second = result
        writeFile('./result-async.txt', 'here I have written in the async file ❤️💗💕☕', (err, result) =>{
            if(err){
                console.log(err);
                return
            }
            console.log(result)
        })
    })
})

