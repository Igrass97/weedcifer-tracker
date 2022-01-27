const dotenv = require('dotenv')

// get config vars
dotenv.config()

// access config var
const {
  PORT,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_PORT,
  TOKEN_SECRET,
  SALT,
} = process.env

const DB = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

module.exports = { PORT, DB, TOKEN_SECRET, SALT }
