'use strict'

const mongoose = require('mongoose')

const deviceSchema = new mongoose.Schema({
  hostIP: {
    type: String
  },
  micType: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  deviceNickname: {
    type: String
  }
}, {
  timestamps: true,
  versionKey: false
})

const Device = mongoose.model('Device', deviceSchema)

module.exports = Device
