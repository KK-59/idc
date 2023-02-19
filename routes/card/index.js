const express = require('express')
const controller = require('../../controllers/card')
const router = express.Router()

router.post('/new',controller.newCard)

module.exports = router