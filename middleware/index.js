const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const TOKEN_KEY = process.env.TOKEN_KEY

const hashPassword = async (password) => {
  let hashedPassword = await bcrypt.hash(password, SALT_ROUNDS)
  return hashedPassword
}

const comparePassword = async (storedPassword, password) => {
  let passwordMatch = await bcrypt.compare(password, storedPassword)
  return passwordMatch
}

const createToken = (payload) => {
  let token = jwt.sign(payload, TOKEN_KEY)
  return token
}

const stripToken = (req, res, next) => {
  try {
    const token = req.headers['authorization'].split(' ')[1]
    if (token) {
      res.locals.token = token
      return next
    }
    res.status(401).send({ status: 'Error', msg: 'Strip unauthorized' })
  } catch (error) {
    res.status(401).send({ status: 'Error', msg: 'Strip Token Error' })
  }
}

const verifyToken = (req, res, next) => {
  const { token } = res.locals
  try {
    let payload = jwt.verify(token, TOKEN_KEY)
    if (payload) {
      res.locals.payload = payload
      return next()
    }
    res.status(401).send({ status: 'Error', msg: 'Verify Unauthorized' })
  } catch (error) {
    console.log(error)
    res.status(401).send({ status: 'Error', msg: 'Verify Token Error' })
  }
}

module.exports = {
  hashPassword,
  comparePassword,
  createToken,
  stripToken,
  verifyToken
}