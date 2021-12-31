const express = require('express')
const router = express.Router()

const { getUserPlants, createPlant } = require('./plant.controller')

router.get('/plants', getUserPlants)
router.post('/plants', createPlant)

module.exports = router
