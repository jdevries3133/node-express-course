const Task = require('../models/Task')
//only the properties we specify in our schema will go to the db, the rest will be ignored. add 10k props to postman, all 
const getAllTasks = ((req, res) =>{
    res.send('All items from the file!')
})


const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    //201 === yay!
    res.status(201).json({ task })
}
  

const getTask = ((req, res) =>{
    res.json({id:req.params.id})
})

const updateTask = ((req, res) =>{
    res.send('Update a task')
})

const deleteTask = ((req, res) =>{
    res.send('Delete a task')
})
//we are going to add more functions in here, so let's export this an an obj
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}


//we are building a server so that our front end can interact with our data. It's a REST API. A representation of data. One of the most popular build structures. It combines http verbs, route paths, and resources, aka data.

//REST determines how the api looks.

//it's a pattern, not a strictly enforced set of rules. We can build our structure how we want, as long as we are consistent with our patterns. 

//just bc we are using the same url/same endpoint, if the methods are different, we are using two totally different reqs.

//we can use params to point to one specific item to do things like get, put/patch or delete to it. 

//REST is a somewhat fuzzy concept. Sometimes we will deviate away from REST bc that's what is req'd.

//We build our API interfaces around CRUD usually bc that's how most users interact with our data.

//We had stored our list items in a basic array. But now we need to begin working with databases. Based on the req, we do operations and then send a response. We will set up and connect to a proper db. We are going to use Mongo, it is non-SQL. Oh my brain....

//Instead of rows and columns, we will store everything as JSON. 

//collections-replace tables(my current tables I've been working on are horses, barns and tack. So instead of calling them tables, I'd be calling them collections )

//Instead of rows, we have documents, which represent a single item.

//a document is a set of k/v pairs. 

//we are going to use mongoDB Atlas and store stuff in the cloud using their generous free tier. 

//mongodb has a dynamic schema. when we insert a doc and change from string to array, we can. But should we though, sounds confusing. Make a plan and try to stick with it.

//we are going to use Mongoose with our MongoDB because it can help speed up our development, comes with some cool stuff. You can set up apps with native mongodb. 

//npm install mongoose if we want to use it outside of this current project.

