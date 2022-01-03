const Plant = require('../../data/models/plant')

const getUserPlants = async (req, res, next) => {
  const userId = req.user._id

  const userPlants = await Plant.find({ userId })

  res.send(userPlants)
}

const createPlant = async (req, res, next) => {
  try {
    const userId = req.user._id

    const newPlant = new Plant({ ...req.body, userId })
    await newPlant.save()
    res.send(newPlant)
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getUserPlants,
  createPlant,
}
