const express = require('express')
const router = express.Router()

const controller = require('../controllers/userController')
const { authenticateJWT, verifyJWT } = require('../middleware/authenticate')

router
  .get('/', authenticateJWT, controller.getUsers)
  .put('/', authenticateJWT, controller.update)
  .post('/', authenticateJWT, controller.create)
  .post('/login', controller.login)
  .post('/logout', controller.logout)
  .get('/verify-token', verifyJWT)
  // To illustrate that auth works
  .get('/auth', authenticateJWT, controller.testJWT)

module.exports = router
