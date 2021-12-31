const express = require('express')
const router = express.Router()

const { login } = require('./auth.controller')

router.post('/', login)

module.exports = router
