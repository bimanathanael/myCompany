const router = require('express').Router()
const controller = require('../controllers')

router.get('/salary', controller.getSalary)
router.post('/randomAbsence', controller.randomAbsence)
router.post('/randomLeaves', controller.randomLeaves)
router.post('/generateNewSalary', controller.generateNewSalary)


module.exports = router