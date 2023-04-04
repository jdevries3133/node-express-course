const express = require('express')
const router = express.Router()

//destructure them right away to be able to use. 
const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require('../controllers/people')


//this will allow us to use the imported functions, but there is another way.
// router.get('/', getPeople)
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

//the benefit of using the below to set up the routes is fewer lines of code.
//check this out! Since we have a base route set up in app.js, we can set up our routes like below:
//We are chaining the functions on to our method and then passing in the controller function. The CB function is added on. 
//Not doing funny names on these because I need to process the information without a random taco or burritto route thrown in!
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

//either set up is fine for the router. They have same functionality.
//we split up the router so we can break the functionality up
module.exports = router
