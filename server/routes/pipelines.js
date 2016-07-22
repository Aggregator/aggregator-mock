import express from 'express'

import _ from 'lodash'
import faker from 'faker'
var chance = require('chance').Chance()

const router = express.Router()
router.get('/', function (req, res, next) {
  res.json(pipelines)
  next()
})

const pipelineNames = [
  'Front End',
  'Back End',
  'Web',
  'Mobile',
  'Hybrid',
  'Android',
  'iOS'
]

const pipelinesLength = pipelineNames.length

const pipelines = _.times(pipelinesLength, function () {
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName(),
    active: chance.bool({
      likelihood: 75
    })
  }
})

module.exports = router
