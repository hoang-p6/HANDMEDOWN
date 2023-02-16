const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

//Routes for Listings
router.get('/', (req, res) => res.send('Home'))
router.get('/listings', controllers.getAllListings)
router.get('/listings/:id', controllers.getListingById)
router.post('/listings', controllers.createListing)
router.put('/listings/:id/edit', controllers.updateListing)
router.delete('/listings/:id', controllers.deleteListing)
//Routes for Offers
router.get('/offers', controllers.getAllOffers)
router.post('/offers', controllers.createOffer)
router.get('/offers/:id', controllers.getOfferById)
router.put('/offers/:id/edit', controllers.updateOffer)
router.delete('/offers/:id', controllers.deleteOffer)
module.exports = router
