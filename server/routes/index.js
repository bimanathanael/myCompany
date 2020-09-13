const router = require('express').Router()
const controller = require('../controllers')

router.get('/salary', controller.getSalary)
router.get('/randomAbsence', controller.randomAbsence)
router.get('/randomLeaves', controller.randomLeaves)

module.exports = router