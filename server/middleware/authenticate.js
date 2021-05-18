const jwt = require('../utils/jwtWrapper')
const DALUser = require('../DAL/DALUser')
const { HTTP401Error, HTTP403Error } = require('simplerr')

const _authProcess = async (req) => {
    if (!req.headers.authorization) {
      throw new HTTP401Error()
    }

    const [prefix, token] = req.headers.authorization?.split(' ')
    if (prefix !== 'Bearer') {
      throw new HTTP403Error()
    }

    const user = await jwt.verify(token)
 
    return await DALUser.findByEmail(user.email)
}

const authenticateJWT = async (req, res, next) => {
  try {
    req.user = await _authProcess(req)
    next()
  } catch (error) {
    res.sendError(error)
  } 
}

const verifyJWT = async (req, res) => {
  try {
    const user = await _authProcess(req)
    res.status(200).json({
      user: user
    })
  } catch (error) {
    console.log(error);
    res.sendError(error)
  } 
}

module.exports = {
  authenticateJWT,
  verifyJWT
}