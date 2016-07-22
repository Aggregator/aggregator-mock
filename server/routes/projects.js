import express from 'express'

import _ from 'lodash'
import faker from 'faker'
var chance = require('chance').Chance()

const router = express.Router()
router.get('/', function (req, res, next) {
  res.json(projects)
  next()
})

const projects = _.times(5, function () {
  return {
    id: faker.random.uuid(),
    displayName: faker.company.companyName(),
    active: chance.bool({
      likelihood: 75
    })
  }
})

module.exports = router
