import express from 'express'

import _ from 'lodash'
import faker from 'faker'

const stateNames = [
  'online',
  'offline',
  'pending'
]

const statesLength = stateNames.length

const states = _.times(statesLength, function (i) {
  return {
    id: faker.random.uuid(),
    name: stateNames[i]
  }
})

const router = express.Router()
router.get('/', function (req, res, next) {
  res.json(states)
  next()
})

module.exports = router
