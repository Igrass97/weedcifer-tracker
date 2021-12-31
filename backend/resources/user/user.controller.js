const { User, validate } = require('../../data/models/user')
const bcrypt = require('bcrypt')

const errorHandler = require('../../error_handler/error_handler')

const { SALT } = require('../../config')

const getUserInfo = async (req, res, next) => {
	try {
		const user = await User.findById(req.user._id).select('-password -__v')
		res.send(user)
	} catch (error) {
		console.log(error)
		res.send('An error occured')
	}
}

const registerUser = async (req, res, next) => {
	try {
		const { error } = validate(req.body)
		if (error) return res.status(400).send(error.details[0].message)

		const salt = await bcrypt.genSalt(Number(SALT))
		const secureUserData = {
			...req.body,
			password: await bcrypt.hash(req.body.password, salt),
		}

		const user = new User(secureUserData)
		await user.save()

		res.send(user)
	} catch (error) {
		errorHandler({ code: error.code, fields: error.keyValue }, res)
	}
}

module.exports = {
	registerUser,
	getUserInfo,
}
