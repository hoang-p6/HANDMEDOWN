const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Offer = new Schema(
  {
    buyer: { type: String, required: true },
    email: { type: String, required: true },
    offer: { type: Number, required: true },
    comments: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Offer', Offer)
