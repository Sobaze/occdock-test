'use strict'
 
 const mongoose = require('mongoose')

 const invoiceSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  invoiceId: {
    type: Number,
  },
  customerId: {
    type: Number
  },
  owner: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }
}, {
   timestamps: true,
   versionKey: false
})
 
const Invoice = mongoose.model('Invoice', invoiceSchema)
 
module.exports = Invoice 
 