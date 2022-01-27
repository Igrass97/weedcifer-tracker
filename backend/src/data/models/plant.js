const mongoose = require('mongoose')

const plantSchema = new mongoose.Schema({
  name: String,
  seedBank: String,
  description: String,
  thc: Number,
  cbd: Number,
  birthDate: String,
  flowering: {
    isFlowering: Boolean,
    floweringStart: String,
  },
  veg: {
    isVeg: Boolean,
    vegStart: Boolean,
  },
  solutionHistory: [
    {
      nutrients: { a: Number, b: Number, c: Number },
      ph: Number,
      date: String,
    },
  ],
  nutrientBrand: String,
  isAutomatic: Boolean,
  userId: mongoose.Schema.Types.ObjectId,
})

const Plant = mongoose.model('Plant', plantSchema)

module.exports = Plant
