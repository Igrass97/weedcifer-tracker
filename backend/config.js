const dotenv = require('dotenv')

// get config vars
dotenv.config()

// access config var
const { PORT, DB, TOKEN_SECRET, SALT } = process.env

module.exports = { PORT, DB, TOKEN_SECRET, SALT }
