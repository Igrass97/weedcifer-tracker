const express = require('express')
const router = express.Router()

const { getUserPlants, createPlant } = require('./plant.controller')

router.get('/', getUserPlants)
router.post('/', createPlant)

module.exports = router
