// const os = require('os');
// const { readFile, writeFile } = require('fs');

// modul.exports ={sent};
// const { writeFile } = require('fs');
// const os = require ('os');
// const sent = require('./practice2');

// writeFile('./content/practice.txt', sent, (err) => {
//     if (err) {
//         console.log(err);
//     }
// })
//     writeFile('./content/practice.txt', os.userInfo().username, { flag: 'a' }, (err) => {
//         if (err) {
//             console.log(err);
//         }
//     });
// const user = require('./test');
// console.log(user);
const os = require('os');
const sentence = require('./practice2');
// const name = 'Tatiana';
// console.log(sayHi(name));
console.log(os.platform(), os.release());

module.exports = sentence;