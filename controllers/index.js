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
const getListingById = async (req, res) => {
  try {
    const { id } = req.params
    const listing = await Listing.findById(id)
    if (listing) {
      return res.status(200).json({ listing })
    }
    return res.status(404).send('Requested listing does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
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
  updateListing,
  getListingById
}