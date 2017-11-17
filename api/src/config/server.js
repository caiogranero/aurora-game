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

// to consign, routes path change when run the test from main folder.
// This happens just in test enviroment
if (process.env.NODE_ENV === 'test') {
  routes = './src/routes'
}

consign()
    .include(routes)
    .into(app)

module.exports = app
