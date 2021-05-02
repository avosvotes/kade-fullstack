const users = require('./data/users.json')
const votes = require('./data/votes.json')

const getUserInfo = (uid) => users.find((user) => user.uid === uid)
const getUserVotes = (uid) => votes.filter((vote) => vote.uid === uid)

const getRandomUser = () =>
  users.filter((user) => user.uid !== 'admin')[
    Math.floor(Math.random() * users.length - 2)
  ]

module.exports = { getUserInfo, getUserVotes, getRandomUser }
