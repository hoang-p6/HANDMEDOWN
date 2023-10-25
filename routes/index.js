const middleware = require('../middleware')
const controller = require('../controllers/authController')
const router = require('express').Router()
const {
  getAllListings,
  getListingById,
  createListing,
  updateListing,
  deleteListing
} = require('../controllers/listingController')
const { Signup, Login } = require('../controllers/authController')

//Routes for Listings
router.get('/', (req, res) => res.send('Home'))
router.get('/listings', getAllListings)
router.get('/listings/:id', getListingById)
router.post('/listings', createListing)
router.put('/listings/:id/edit', updateListing)
router.delete('/listings/:id', deleteListing)

//Routers for Authentication
router.post('/signup', Signup)
router.post('/login', Login)
router.put(
  '/update/:user_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePassword
)
router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)
module.exports = router
