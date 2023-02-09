const Listing = require('../models/listing')
const Offer = require('../models/offer')

const createListing = async (req, res) => {
  try {
    const listing = await new Listing(req.body)
    await listing.save()
    return res.status(201).json({
      listing
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const updateListing = async (req, res) => {
  try {
    const listing = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(listing)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  createListing,
  updateListing
}
