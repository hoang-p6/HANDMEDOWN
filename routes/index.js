const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('Home'))
router.post('/listing', controllers.createListing)
module.exports = router
