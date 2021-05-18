'use strict'

const jwt = require('jsonwebtoken')
const util = require('util')
const signToken = util.promisify(jwt.sign)
const verifyToken = util.promisify(jwt.verify)


const jwtWrapper = {}

jwtWrapper.verify = async (token) => {
	try {
		return await verifyToken(token, process.env.JWT_TOKEN_SECRET)
	} catch (error) {
		throw new Error(error) 
	}
}


jwtWrapper.sign = async (email) => {
  try {
		return await signToken({
			email: email
		},
			process.env.JWT_TOKEN_SECRET, {
				algorithm: 'HS256',
				expiresIn: 3600
		})
	} catch (error) {
		throw new Error(error)
	}
}

module.exports = jwtWrapper