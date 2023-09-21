const User = require('../models/user')
const { createSecretToken } = require('../util/SecretToken')
const bcrypt = require('bcrypt')

const Signup = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, createdAt } =
      req.body
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.json({
        message: 'This email is already associated with an existing account'
      })
    }
    const user = await User.create({
      firstName,
      lastName,
      username,
      email,
      password,
      createdAt
    })
    const token = createSecretToken(user._id)
    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false
    })
    res
      .status(201)
      .json({ message: 'User signed in successfully', success: true, user })
    next()
  } catch (error) {
    console.error(error)
  }
}
module.exports = {
  Signup
}
