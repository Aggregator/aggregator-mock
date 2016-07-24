import express from 'express'

import _ from 'lodash'
import faker from 'faker'

const stageNames = [
  'dev',
  'test',
  'demo',
  'live'
]

const stagesLength = stageNames.length

const stages = _.times(stagesLength, function (i) {
  return {
    id: faker.random.uuid(),
    name: stageNames[i]
  }
})

const router = express.Router()
router.get('/', function (req, res, next) {
  res.json(stages)
  next()
})

module.exports = router
