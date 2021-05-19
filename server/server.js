const express = require('express')
const helmet = require('helmet')
const logger = require('morgan')
const path = require('path')
const app = express()
const simplerr = require('simplerr')
const mongoose = require('./configs/mongoose')
require('dotenv').config()
const knownErrors = require('./utils/knownErrors')

mongoose.connect().catch(error => {
  console.error(error)
  process.exit(1)
})

// simplerr will attach a sendError function on the response object
// this function can be used to send errors.
app.use(simplerr(knownErrors))

app.use(helmet())
app.use(logger('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }))

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  next()
})

app.use(express.json())

app.use(`/api/${process.env.API_VERSION}/users`, require('./routes/userRouter'))

// Simple greeting one to try it out
app.get('/api/greeting', (req,res) => {
  const name = req.query.name || 'World';
res.setHeader('Content-Type', 'application/json');
res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

// TODO: fix 404!

// test endpoint to demonstrate the error handling
// This endpoint will throw an error with the message "resource not found"
// This error is specified in knownErrors-array, the very same array passed into simplerr function
// simplerr will catch this error and send an error response according to what is specified in the knownError array
app.get('/404', (req, res) => {
  try {
    throw new Error('resource not found') 
  } catch (error) {
    // This will send a 404 response
   res.sendError(error) 
  }
})

// This endpoint throws one of simplerr's own errors. This error will be catched by sendError.
app.get('/403', (req, res) => {
  try {
    throw new HTTP403Error() 
  } catch (error) {
    // this will send a 403 response
   res.sendError(error) 
  }
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}


const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
  console.log('Press Ctrl-C to terminate...')
})

module.exports = app
