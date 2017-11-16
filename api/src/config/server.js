const bodyParser = require('body-parser')
const consign = require('consign')
const cookieParser = require('cookie-parser')
const express = require('express')
const helmet = require('helmet')
const app = express()

app.use(
  cookieParser(),
  helmet(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
)

let routes = './routes'

consign()
    .include(routes)
    .into(app)

module.exports = app
