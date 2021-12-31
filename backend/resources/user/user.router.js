const express = require('express')

const auth = require('../auth/auth.middleware')

const { registerUser, getUserInfo } = require('./user.controller')

const router = express.Router()

router.get('/me', auth, getUserInfo)
router.post('/register', registerUser)

module.exports = router
