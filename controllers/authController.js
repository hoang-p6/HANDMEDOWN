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
  } catch (error) {
    console.error(error)
  }
}

const Login = async (req, res) => {
  try {
    const { email, password } = req.body
    if (!email || !password) {
      return res.json({ message: 'All fields are required!' })
    }
    const user = await User.findOne({ email })
    if (!user) {
      return res.json({ message: 'Incorrect email or password' })
    }
    const auth = await bcrypt.compare(password, user.password)
    if (!auth) {
      return res.json({ message: 'Incorrect email or password' })
    }
    const token = createSecretToken(user._id)

    res.cookie('token', token, {
      withCredentials: true,
      httpOnly: false
    })
    res.status(201).json({ message: 'User logged in successfully' })
  } catch (error) {
    console.error(error)
  }
}
module.exports = {
  Signup,
  Login
}
