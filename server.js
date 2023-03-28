const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')
const PORT = process.env.PORT || 3001

const app = express()

const { Listing } = require('./models/listing')
//heroku deployment
app.use(express.static(`${__dirname}/client/build`))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(logger('dev'))
app.use(cors())
app.use('/', routes)
app.get('/listings', async (req, res) => {
  let listings = await Listing.find({})
  res.send(listings)
})
db.on('error', console.error.bind(console, 'MongoDB connection error'))
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
