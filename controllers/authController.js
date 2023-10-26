const User = require('../models/user')
const middleware = require('../middleware')

const Signup = async (req, res) => {
  try {
    const { email, password, firstName, lastName, username } = req.body
    let passwordDigest = await middleware.hashPassword(password)
    const user = await User.create({
      firstName,
      lastName,
      email,
      username,
      passwordDigest
    })
    res.send(user)
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}
const getUserById = async (req, res) => {
  try {
    const { user_id } = req.params
    const user = await User.findById(user_id)
    res.send(user)
    if (!user) {
      return res.status(201).send('User with the specified ID does not exist')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const Login = async (req, res) => {
  try {
    console.log(req.body)
    const { email, password } = req.body
    const user = await User.findOne({
      email: email
    })
    let matched = await middleware.comparePassword(
      user.passwordDigest,
      password
    )
    if (!email || !password) {
      return res.json({ message: 'All fields are required!' })
    }
    if (!user) {
      return res.json({ message: 'Incorrect email or password' })
    }
    if (!matched) {
      return res.json({ message: 'Incorrect email or password' })
    }
    if (matched) {
      let payload = { id: user.id, email: user.email }
      let token = middleware.createToken(payload)
      return res.send({
        user: payload,
        token
      })
    }
    res.status(401).send({ status: 'Error', msg: 'Incorrect Password' })
  } catch (error) {
    console.error(error)
    res
      .status(401)
      .send({ status: 'Error', msg: 'An error has occurred on login!' })
  }
}

const UpdatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body
    const user = await User.findByPk(req.params.user_id)
    let matched = await middleware.comparePassword(user.password, oldPassword)
    if (matched) {
      let password = await middleware.hashPassword(newPassword)
      await user.update({ password })
      let payload = {
        id: user.id,
        email: user.email
      }
      return res.send({ status: 'Password Updated', user: payload })
    }
    res.status(401).send({ status: 'Error', msg: 'Old Password did not match' })
  } catch (error) {
    res.status(401).send({
      status: 'Error',
      msg: 'An error has occurred while updating the password'
    })
  }
}

const CheckSession = async (req, res) => {
  const { payload } = res.locals
  res.send(payload)
}
module.exports = {
  Signup,
  Login,
  UpdatePassword,
  CheckSession,
  getUserById
}
