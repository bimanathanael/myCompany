const router = require('express').Router()
const controller = require('../controllers')

router.get('/salary', controller.getSalary)
router.get('/randomAbsence', controller.randomAbsence)

module.exports = router