const express = require('express')

const dbconnect = require('./data/dbconnect')
const app = express()

const main = async () => {
	await dbconnect()
	await app.listen(3000)

	console.log('App listening in port 3000')
}

main()
