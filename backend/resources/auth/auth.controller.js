const { User } = require('../../data/models/user')

const bcrypt = require('bcrypt')
const Joi = require('joi')

const login = async (req, res, next) => {
	const validate = user => {
		const schema = Joi.object({
			email: Joi.string().email().required(),
			password: Joi.string().required(),
		})
		return schema.validate(user)
	}

	try {
		const { error } = validate(req.body)
		if (error) return res.status(400).send(error.details[0].message)

		const user = await User.findOne({ email: req.body.email })
		if (!user) return res.status(400).send('Invalid email or password')

		const validPassword = await bcrypt.compare(
			req.body.password,
			user.password
		)
		if (!validPassword)
			return res.status(400).send('Invalid email or password')

		const token = user.generateAuthToken()
		res.send({ access_token: token, user })
	} catch (error) {
		console.log(error)
		res.send('An error occured')
	}
}

module.exports = { login }
