const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
	name: String,
	seedBank: String,
	description: String,
	thc: Number,
	cbd: Number,
	birthDate: Date,
	flowering: {
		isFlowering: Boolean,
		floweringStart: Date,
	},
	veg: {
		isVeg: Boolean,
		vegStart: Boolean,
	},
	solutionHistory: [
		{
			nutrients: { a: Number, b: Number, c: Number },
			ph: Number,
			date: Date,
		},
	],
	nutrientBrand: String,
	isAutomatic: Boolean,
})

const Plant = mongoose.model('Plant', plantSchema)

module.exports = Plant
