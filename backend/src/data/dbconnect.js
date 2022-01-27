const mongoose = require('mongoose')

const { DB } = require('../config')

const dbconnect = async () => {
	try {
		await mongoose.connect(DB)
		console.log('Connected to MongoDB')
	} catch (error) {
		console.log(error)
	}
}

module.exports = dbconnect
