const express = require('express')
const controller = require('../../controllers/user')
const router = express.Router()

router.post('/new',controller.newUser)

module.exports = router