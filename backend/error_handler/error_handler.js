const ERROR_MESSAGES = require('./error_messages')

const errorGenerator = ({ code, fields }, res) => {
  res.status(400).send({ message: ERROR_MESSAGES[code], code, fields })
}

module.exports = errorGenerator
