const mongoose = require('mongoose')
require('dotenv').config()
const MONGODBURI = process.env.MONGODB_URI

mongoose
  .connect(MONGODBURI)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
