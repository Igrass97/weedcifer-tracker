const mongoose = require('mongoose')

const dbconnect = async () => {
	try {
		await mongoose.connect('mongodb://localhost:27017/weedciferhub')
		console.log('Connected to MongoDB')
	} catch (error) {
		console.log(error)
	}
}

module.exports = dbconnect
