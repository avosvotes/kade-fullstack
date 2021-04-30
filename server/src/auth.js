const jwt = require('jsonwebtoken')
const SEC_IN_HOUR = 3600
const secret = process.env.SECRET

const expDate = () => Math.floor(Date.now() / 1000) + SEC_IN_HOUR * 10 //10h validity

const generateToken = data =>
  jwt.sign(
    {
      exp: expDate(),
      data,
    },
    secret
  )

const decode = token => jwt.verify(token, secret)

module.exports = { generateToken, decode }
