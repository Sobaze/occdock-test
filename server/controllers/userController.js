'use strict'

const User = require('../DAL/DALUser')
const jwt = require('../utils/jwtWrapper')
const { HTTP400Error, HTTP403Error, HTTP404Error } = require('simplerr')
const Invoice = require('../DAL/DALInvoice')

const userController = {}

userController.getUsers = async (req, res) => {
  try {
    const { limit: limitAsString } = req.query
    const limit = Number(limitAsString) || 50

    const users = await User.getUsers(limit)

    res.status(200).json({
      limit: limit,
      users: users
    })
  } catch (error) {
    res.sendError(error)
  }
}

userController.login = async (req, res, next) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      throw new HTTP400Error({ message: 'missing credentials' })
    }

    const user = await User.authenticateByEmail(email, password)

    const accessToken =  await jwt.sign(email)

    return res.status(200).json({
      token: accessToken,
      user: {
        id: user._id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        phone: user.phone,
        role: user.role,
        subRole: user.subRole,
        deviceAccess: user.deviceAccess
      }
    })
  } catch (error) {
    res.sendError(error)
  }
}

userController.logout = async (req, res, next) => {
  try {

  } catch (error) {
    res.sendError(error)
  }
}

userController.create = async (req, res, next) => {
  try {
    //TODO: fix auth-function to check admin/customer
    if (req.user.role !== 'Admin') {
      throw new HTTP403Error()
    }

    const {
      email, firstName, lastName, phone, role, subRole,
      company, amount, deviceAccess, password, reEnterPassword
    } = req.body

    if (password !== reEnterPassword) {
      throw new HTTP400Error({ message: `Passwords don't match` })
    }

    const newUser = {
      email: email,
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      role: role,
      subRole: subRole,
      company: company,
      amount: amount,
      deviceAccess: deviceAccess,
      password: password
    }

    if (role === 'Admin') {
      newUser.company = null
      newUser.deviceAccess = null
    }

    // first checks all required fields for both admin/customer, 
    // then all extra required fields for customer
    if ((!role || !firstName || !lastName || !email || !phone) ||
      (role === 'Customer' && (!company )) 
    ) {
      throw new HTTP400Error({message: 'Provide all required fields'})
    }

    // only numbers/null values valid for Customer's invoice amount
    if ((role === 'Customer' && isNaN(parseInt(amount)) && amount !== null)) {
			throw new HTTP400Error({message: 'Amount have to be number'})
    }

    if (await User.findByEmail(email)) {
      throw new HTTP400Error({ message: 'Email is already registered' })
    }
    
    let savedUser = await User.createUser(newUser)
    let invoice

    if (amount && savedUser.role === 'Customer') {
      invoice = await Invoice.createInvoiceDetails({ amount: amount, owner: savedUser._id })
      await User.updateById(savedUser._id, { $addToSet: { invoiceIds: invoice._id } })
    }

    return res.status(201).json({
      message: 'created',
      user: {
        id: savedUser._id,
        email: savedUser.email,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        phone: savedUser.phone,
        role: savedUser.role,
        subRole: savedUser.subRole,
        deviceAccess: savedUser.deviceAccess,
        invoiceIds: !invoice ? [] : [invoice._id]
     }})
  } catch (error) {
    res.sendError(error)
  }
}

userController.update = async (req, res, next) => {
  try {
    const { email, amount } = req.body

    if (!email || !amount) {
      throw new HTTP400Error({
        message: 'missing fields',
        body: {
          email: `Value recieved was: ${email}`,
          amount: `Value recieved was: ${amount}`
        } 
      })
    }

    const customer = await User.findByEmail(email)
    if (!customer) throw new HTTP404Error({ message: 'customer not found' })

    const invoice = await Invoice.updateByOwnerId(customer._id, { amount: amount })
    await User.updateByEmail(email, { $addToSet: { invoiceIds: invoice._id } })

    return res.status(200).json({
      message: 'Customer invoice updated successfully'
    })
  } catch (error) {
    res.sendError(error)
  }
}

// Only to illustrate authentication-success from authenticateJWT in ../middleware
userController.testJWT = async (req, res, next) => {
  try {
    return res.status(200).json({
      message: 'Got authenticated!'
    })
  } catch (error) {
    res.sendError(error)
  }
}

module.exports = userController