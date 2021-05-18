'use strict'

const User = require('../models/userModel')
const { HTTP401Error, HTTP500Error } = require('simplerr')

const DALUser = {}

/**
 * Search the database for a user by id.
 *
 * @param {string} id - The users database id.
 * @returns A user object or null if no user is found.
 */
DALUser.find = async () => {
  try {
    return User.findAll() || null
  } catch (error) {
    // TODO Improve error handling, The goal should be to have generic error not dependant on the type of database being used
    throw new Error(error.message)
  }
}

/**
 * Search the database for a user by id.
 *
 * @param {string} id - The users database id.
 * @returns A user object or null if no user is found.
 */
DALUser.findById = async (id) => {
  try {
    return User.findOne({ _id: id }) || null
  } catch (error) {
    // TODO Improve error handling, The goal should be to have generic error not dependant on the type of database being used
    throw new Error(error.message)
  }
}

/**
 * Search the database for a user by email.
 *
 * @param {string} email - The users email to search for.
 * @returns A user object or null if no user is found.
 */
DALUser.findByEmail = async (email) => {
  try {
    return User.findOne({ email: email }) || null
  } catch (error) {
    // TODO Improve error handling, The goal should be to have generic error not dependant on the type of database being used
    throw new Error(error.message)
  }
}

/**
 * Update a user by providing a user id and the data to update.
 *
 * @param {string} id - The users database id.
 * @param {object} data - The data that will be updated.
 * @returns The updated user.
 */
DALUser.updateById = async (id, data) => {
  try {
    return User.updateOne({ _id: id }, data) || null
  } catch (error) {
    // TODO Improve error handling, The goal should be to have generic error not dependant on the type of database being used
    throw new Error(error.message)
  }
}

/**
 * Update a user by providing a user email and the data to update.
 *
 * @param {string} id - The users email address.
 * @param {object} data - The data that will be updated.
 * @returns An object containing information about teh update query.
 */
DALUser.updateByEmail = async (email, data) => {
  try {
    return await User.updateOne({ email: email }, data)
  } catch (error) {
    // TODO Improve error handling, The goal should be to have generic error not dependant on the type of database being used
    throw new Error(error.message)
  }
}

/**
 * Will authenticate the user with the provided email and password.
 * An error will be thrown if faulty credentials are provided.
 *
 * @param {string} email - The email to the user.
 * @param {string} password - The password provided by the user.
 * @return -  Returns the user if credentials is correct. Will throw if not.
 */
DALUser.authenticateByEmail = (email, password) => {
  try {
    return User.authenticate(email, password)
  } catch (error) {
    // TODO Improve error handling, The goal should be to have generic error not dependant on the type of database being used
    throw new HTTP401Error({ message: 'invalid credentials' })
  }
}

/**
 * Will return all users from the database. The default limit is set to 50
 *
 * @param {number | undefined} limit - The maximum number of users returned.
 * @return - An array of users on an empry array if no users where found.
 */
DALUser.getUsers = async (limit) => {
  try {
    const max = Number(limit) || 50

    return (await User.find({})
      .limit(max))
      .map(user => (
        {
          id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
          phone: user.phone,
          role: user.role,
          subRole: user.subRole,
          deviceAccess: user.deviceAccess
        }
      ))
  } catch (error) {
    // TODO Improve error handling, The goal should be to have generic error not dependant on the type of database being used
    throw new HTTP500Error()
  }
}

/**
 * Will create a user in the database by providing the new users credentials.
 *
 * @param {object} data - The data for the new user.
 * @return - Returns the created user if credentials is correct. Will throw if not.
 */
DALUser.createUser = async (data) => {
  try {
    return await User.create(data)
  } catch (error) {
    // TODO Improve error handling, The goal should be to have generic error not dependant on the type of database being used
    throw new Error(error.message)
  }
}

module.exports = DALUser
