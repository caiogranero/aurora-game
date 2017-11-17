const axios = require('axios')
const _ = require('lodash')

const calculator = require('../helpers/calculators')
const baseURL = '/api/game'

module.exports = app => {
  app.post(baseURL, (req, res) => {
    if (req.body && req.body.dices) {
      const dices = req.body.dices
      let results = []

      let groupDices = _.countBy(dices, (dice => dice ))

      // Check if is able and
      // calculate the total points for the frst five categories
      const unique = calculator.isUnique(groupDices)
      unique.forEach(el => {
        results.push({
          totalPoints: el.points,
          category: el.category
        })
      })

      // Check if is able and
      // calculate the total points for the "Par" category
      const par = calculator.isPair(groupDices, 2, 1).points
      if (par > 0) {
        results.push({
          totalPoints: par,
          category: 'Par'
        })
      }

      // Check if is able and
      // calculate the total points for the "Dois Par" category
      const doisPares = calculator.isPair(groupDices, 2, 2).points
      if (doisPares > 0) {
        results.push({
          totalPoints: doisPares,
          category: 'Dois Pares'
        })
      }

      // Check if is able and
      // calculate the total points for the "Trio" category
      const trio = calculator.isPair(groupDices, 3, 1).points
      if (trio > 0) {
        results.push({
          totalPoints: trio,
          category: 'Trio'
        })
      }

      // Check if is able and
      // calculate the total points for the "Full House" category
      if (par > 0 && trio > 0) {
        results.push({
          totalPoints: trio + par,
          category: 'Full House'
        })
      }

      // Check if is able and
      // calculate the total points for the "Quadra" category
      const quadra = calculator.isPair(groupDices, 4, 1).points
      if (quadra > 0) {
        results.push({
          totalPoints: quadra,
          category: 'Quadra'
        })
      }

      // Check if is able and
      // calculate the total points for the "Sequencia menor" category
      const minorSequence = calculator.isOrdered(dices, 4)
      if (minorSequence) {
        results.push({
          totalPoints: 15,
          category: 'Sequencia Menor'
        })
      }

      // Check if is able and
      // calculate the total points for the "Sequencia Maior" category
      const majorSequence = calculator.isOrdered(dices, 5)
      if (majorSequence) {
        results.push({
          totalPoints: 20,
          category: 'Sequencia Maior'
        })
      }

      // Check if is able and
      // calculate the total points for the "Aurora" category
      const equals = calculator.isEquals(dices)
      if (equals) {
        results.push({
          totalPoints: 50,
          category: 'Aurora'
        })
      }

      res.status(200).send({results})
    } else {
      res.status(400).send({message: 'Missing body content'})
    }
  })
}
