const express = require('express')
const router = express.Router();

//let's deconstruct our routes:
const {getAllTasks, getTask, createTask, updateTask, deleteTask} = require('../controllers/tasks')
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)
//we have many things that we can do with the router, but let's use this for now!
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)
//we can only really test getSingleTask and createTasks bc that is what our browser can do by default. So let's test with postman. Don't want to go any further without testing.

//with this get route, we are manually passing in our controller
// router.route('/').get((req, res) =>{
//     res.send('all items from start routes')
// })

module.exports = router