const mongoose = require('mongoose')

module.exports.connect = async () => {
  try {
    mongoose.connection.on('connected', () => console.log('Mongoose connection is open.'))
    mongoose.connection.on('disconnected', () => console.log('Mongoose disconnected.'))

    process.on('SIGNIT', () => {
      mongoose.connection.close(() => {
        console.log('Mongoose connection is disconnected due to application termination.')
        process.exit(0)
      })
    })
    return mongoose.connect(process.env.MONGODB_URI || process.env.CONNECTION_STRING, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  } catch (error) {
    mongoose.connection.on('error', error => console.error('Mongoose connection error: ' + error))
  }
}