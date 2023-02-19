const express = require('express')
const userRoutes = require('./user')
const deckRoutes = require('./deck')
const cardRoutes = require('./card')

const router = express.Router()

router.use("/user", userRoutes)
router.use("/deck", deckRoutes)
router.use("/card", cardRoutes)

module.exports = router