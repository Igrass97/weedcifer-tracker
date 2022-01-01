const express = require('express')
const cors = require('cors')

const dbconnect = require('./data/dbconnect')
const app = express()

const auth = require('./resources/auth/auth.middleware')

const userRouter = require('./resources/user/user.router')
const plantRouter = require('./resources/plant/plant.router')
const authRouter = require('./resources/auth/auth.router')

const { PORT } = require('./config')

app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)
app.use('/users', userRouter)
app.use('/plants', auth, plantRouter)

const main = async () => {
	await dbconnect()
	await app.listen(PORT)

	console.log(`App listening in port ${PORT}`)
}

main()
