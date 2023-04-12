const path = require('path');

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)
//we just made a file path! we can also ge the base name. 
//want only the base name?
const base = path.basename(filePath)
console.log(base)

//let's use a seq of paths:
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute)
//we can use the above methods to get diff file paths for running our file in diff ways on diff sys