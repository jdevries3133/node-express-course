const {writeFile} = require('fs').promises;
const os = require ('os');
const sentence = require('./practice2');

const doWrite = async () => {
    try {
        await writeFile('./content/practice.txt', sentence);
        await writeFile('./content/practice.txt', os.userInfo().username, { flag: "a"});
        console.log('finisched writing.');
    } catch (err) {
        console.log(err.message);
    }
}
doWrite();
console.log('got here!');