// CommonJS, every file is moldule (by defauit)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor')
require('./7-mind')

sayHi('susan')
sayHi(names.john)
sayHi(names.tanya)