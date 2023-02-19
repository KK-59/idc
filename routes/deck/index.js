const express = require('express')
const controller = require('../../controllers/deck')
const router = express.Router()

router.post('/new',controller.newDeck)

module.exports = router