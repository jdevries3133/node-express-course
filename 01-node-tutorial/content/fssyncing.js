const {readFileSync, writeFileSync} = require('fs');

//let's read and then write to two files

const first = readFileSync('./first.txt', 'utf-8');
const second = readFileSync('./second.txt', 'utf-8');

console.log(first, second)
//for both of these, provide the file name as an arg and the encodoing
writeFileSync('./result-sync.txt', `here is Amys result 🏠:  ${first}, ${second} `, {flag:'a'})

//see! Type what we want to above in the writeFileSync, switch to the result file, clear it out, hit run and watch our WriteFileSync happen! It is magical.

//the flag above will run it again



