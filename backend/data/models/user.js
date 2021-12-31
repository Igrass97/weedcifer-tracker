const mongoose = require('mongoose')
const Schema = mongoose.Schema

const jwt = require('jsonwebtoken')
const Joi = require('joi')

const { TOKEN_SECRET } = require('../../config')

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
})

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, TOKEN_SECRET)
	return token
}

const User = mongoose.model('user', userSchema)

const validate = user => {
	const schema = Joi.object({
		name: Joi.string().required(),
		email: Joi.string().email().required(),
		password: Joi.string().required(),
	})
	return schema.validate(user)
}

module.exports = { User, validate }
