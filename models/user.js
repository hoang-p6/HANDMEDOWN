const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: new Date() }
  },
  { timestamps: true }
)
User.pre('save', async function () {
  this.password = await bcrypt.hash(this.password, 12)
})
module.exports = mongoose.model('User', User)
