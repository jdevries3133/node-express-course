//let's set up our future schema for the db

//keep in mind that the instance of a model is a document!
const mongoose = require('mongoose')


//use .Schema to set up the structure for all of our docs in the collection. Use k/v pairs
//in mongoose a model is a wrapper for the schema. Can do CRUD with this bc api is straightforward.
const TaskSchema = new mongoose.Schema({
  name: String, 
  completed: Boolean,
})

module.exports = mongoose.model('Task', TaskSchema)

