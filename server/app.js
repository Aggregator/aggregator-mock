import express from 'express'
import compression from 'compression'

import pipelines from './routes/pipelines'
import projects from './routes/projects'
import stages from './routes/stages'
import states from './routes/states'
import users from './routes/users'

const PORT = process.env.PORT || 3000

const app = express()
app.use(compression())

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Accept")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, HEAD, DELETE, OPTIONS")
  next()
})

app.use(express.static('public'))
app.use('/pipelines', pipelines)
app.use('/projects', projects)
app.use('/stages', stages)
app.use('/states', states)
app.use('/users', users)

app.listen(PORT)
