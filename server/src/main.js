require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const os = require('os')
const port = process.env | 4500
const { generateToken, decode } = require('./auth')
const { getUserInfo, getUserVotes, getRandomUser } = require('./database')

app.use(cors())

app.get('/', (req, res) => {
  console.log(req.headers.authorization)
  const token = decode(req.headers.authorization)
  res.send(`Server running on ${os.hostname()} on port ${port}`)
})

app.get('/login', (req, res) => {
  const uid = getRandomUser().uid
  res.send(generateToken(uid))
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
