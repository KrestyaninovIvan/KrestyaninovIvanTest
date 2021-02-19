const express = require('express')
const controller = require('../controllers/card')
const router = express.Router()


router.get('/', controller.summaryData)


router.get('/get/:id/', controller.fullData)

module.exports = router



