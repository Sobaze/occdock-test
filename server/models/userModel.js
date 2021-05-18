'use strict'
 
const { HTTP401Error } = require('simplerr')

 const mongoose = require('mongoose')
 const bcrypt = require('bcryptjs')

 const userSchema = new mongoose.Schema({
   email: {
     type: String,
     unique: true,
     required: true,
     minlength: [5, 'Provide a valid email'], 
     validate: [/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/, 'Provide a valid email']
   },
   firstName: {
     type: String,
     required: true,
     minlength: [1, 'Provide minimum 1 characters']
   },
   lastName: {
     type: String,
     required: true,
     minlength: [1, 'Provide minimum 1 characters']
   },
   phone: {
     type: String,
     required: true
   },
   role: {
     type: String,
     required: true,
     enum: ['Admin', 'Customer'],
   },
   subRole: {
     type: String,
     enum: ['full', 'limited']
   },
   company: {
    type: String,
   },
   deviceAccess: [],
   password: {
     type: String,
     minlength: [8, 'Password must have minimum 8 characters']
   },
    invoiceIds: { 
			type: [mongoose.Schema.Types.ObjectId], 
			ref: 'Invoice' 
    }
 }, {
   timestamps: true,
   versionKey: false
 })

userSchema.statics.authenticate = async function (email, password) {
   const user = await this.findOne({ email })
   if (!user || !(await bcrypt.compare(password, user.password))) {
     throw new HTTP401Error()
   }
   return user
 }
 
userSchema.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 8)
})

const User = mongoose.model('User', userSchema)
 
module.exports = User