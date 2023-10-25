const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 3001

const { Listing } = require('./models/listing')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
// app.use(
//   cors({
//     origin: ['http://localhost:3000'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
//   })
// )
app.use(cookieParser())
app.use('/', routes)
app.get('/listings', async (req, res) => {
  let listings = await Listing.find({})
  res.send(listings)
})
db.on('error', console.error.bind(console, 'MongoDB connection error'))
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
