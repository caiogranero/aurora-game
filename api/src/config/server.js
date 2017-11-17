const bodyParser = require('body-parser')
const consign = require('consign')
const cookieParser = require('cookie-parser')
const express = require('express')
const helmet = require('helmet')
const app = express()
const path = require('path')
const __static = path.join(__dirname, '/../static/')

app.use(
  cookieParser(),
  helmet(),
  bodyParser.json(),
  bodyParser.urlencoded({ extended: true })
)

app.use('/', express.static(__static))

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
