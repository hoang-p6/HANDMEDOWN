const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

//Routes for Listings
router.get('/', (req, res) => res.send('Home'))
router.get('/listing/:id', controllers.getListingById)
router.post('/listing', controllers.createListing)
router.put('/listing/:id', controllers.updateListing)
router.delete('/listing/:id', controllers.deleteListing)
//Routes for Offers
router.post('/offer', controllers.createOffer)
router.get('/offer/:id', controllers.getOfferById)
router.put('/offer/:id', controllers.updateOffer)
router.delete('/offer/:id', controllers.deleteOffer)
module.exports = router
