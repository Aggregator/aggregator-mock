import express from 'express'

import _ from 'lodash'
import faker from 'faker'
var chance = require('chance').Chance()

const users = _.times(10, function () {
  return {
    id: faker.random.uuid(),
    email: faker.internet.email(),
    username: faker.internet.userName(),
    displayName: faker.name.findName(),
    active: chance.bool({
      likelihood: 75
    })
  }
})

const router = express.Router()
router.get('/', function (req, res, next) {
  res.json(users)
  next()
})
module.exports = router
