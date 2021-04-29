require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const os = require('os')
const port = process.env | 4500

app.use(cors())

app.get('/', (req, res) => {
  res.send(`Server running on ${os.hostname()} on port ${port}`)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
