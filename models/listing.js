const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Listing = new Schema(
  {
    seller: { type: String, required: true },
    email: { type: String, required: true },
    item: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    sold: { type: Boolean, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Listing', Listing)
