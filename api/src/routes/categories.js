const categories = require('../helpers/categories')

const baseURL = '/api/categories'

module.exports = app => {
  app.get(baseURL, (req, res) => {
    res.status(200).send({results: categories})
  })
}
