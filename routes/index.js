const { Router } = require('express')
const router = Router()
const {
  getAllListings,
  getListingById,
  createListing,
  updateListing,
  deleteListing
} = require('../controllers/listingController')
const { Signup } = require('../controllers/authController')

//Routes for Listings
router.get('/', (req, res) => res.send('Home'))
router.get('/listings', getAllListings)
router.get('/listings/:id', getListingById)
router.post('/listings', createListing)
router.put('/listings/:id/edit', updateListing)
router.delete('/listings/:id', deleteListing)

//Routers for Authentication
router.post('/signup', Signup)
module.exports = router
