const sayHi = (name) =>{
    console.log(`hello there ${name}, from the utils.js`)
}
module.exports = sayHi

module.exports.items = ['cat', 'banana']
const person = {
  name: 'jamie'
}

module.exports.singlePerson = person
