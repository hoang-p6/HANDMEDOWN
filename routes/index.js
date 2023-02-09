const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('Home'))
router.get('/listing/:id', controllers.getListingById)
router.post('/listing', controllers.createListing)
router.put('/listing/:id', controllers.updateListing)
router.delete('/listing/:id', controllers.deleteListing)
module.exports = router
