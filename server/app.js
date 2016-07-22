import express from 'express'
import compression from 'compression'

import pipelines from './routes/pipelines'
import projects from './routes/projects'

var app = express()
app.use(compression())
app.set('port', process.env.PORT || 3000)

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With, Accept")
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, HEAD, DELETE, OPTIONS")
  next()
})

app.listen(app.get('port'), () => console.log(`server is up ${app.get('port')}`))

app.use(express.static('public'))
app.use('/pipelines', pipelines)
app.use('/projects', projects)

