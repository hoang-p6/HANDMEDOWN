const Listing = require('../models/listing')
const Offer = require('../models/offer')
//Listing CRUD Operators
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
const getAllListings = async (req, res) => {
  try {
    const listings = await Listing.find()
    return res.status(200).json({ listings })
  } catch (error) {
    return res.status(500).send(error.message)
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
const deleteListing = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Listing.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Listing deleted')
    }
    throw new Error('Listing not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//Offer CRUD Operators
const getAllOffers = async (req, res) => {
  try {
    const offers = await Offer.find()
    return res.status(200).json({ offers })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const createOffer = async (req, res) => {
  try {
    const listing = await new Offer(req.body)
    await listing.save()
    return res.status(201).json({
      listing
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}
const getOfferById = async (req, res) => {
  try {
    const { id } = req.params
    const listing = await Offer.findById(id)
    if (listing) {
      return res.status(200).json({ listing })
    }
    return res.status(404).send('Requested offer does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const updateOffer = async (req, res) => {
  try {
    const listing = await Offer.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(listing)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const deleteOffer = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Offer.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Offer deleted')
    }
    throw new Error('Offer not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  getAllListings,
  createListing,
  updateListing,
  getListingById,
  deleteListing,
  getAllOffers,
  createOffer,
  getOfferById,
  updateOffer,
  deleteOffer
}
