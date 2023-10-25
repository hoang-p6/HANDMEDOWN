const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true }
    // createdAt: { type: Date, default: new Date() }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
