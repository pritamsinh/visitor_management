const assestController = require('../controllers/assestscontroller.js')
const router = require('./employee')

const router = require('express').Router()

router.post('/addAssest', assestController.addAssest)

router.put('/:id', assestController.updateAssest)

router.delete('/:id', assestController.deleteAssest)

module.exports = router

