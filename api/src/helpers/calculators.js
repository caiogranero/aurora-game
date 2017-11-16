const _ = require('lodash')
const sanitize = require('./dices')

module.exports = {
  /** Check if there are min 2 pairs of dices with same values
   * @param  {Object} groupDices - Object of dices grouped by quantity
   * @param  {Integer} qttEquals - Quantity of elements that need to be equals
   * @param  {[type]} pairs - Quantity of pairs that will be compare
   * @return {Object} Return a object with the total points that have min equals 2 pairs 
   */
  isPair (groupDices, qttEquals, pairs) {
    const keys = Object.keys(groupDices).filter(key => groupDices[key] == qttEquals)
    let y = 0
    if (keys.length === pairs) {
      // if the array has just one value, need to use a initialValue for reduce can calculate 
      // the total points
      y = keys.reduce(function (oldValue, newValue) {
        return ((groupDices[oldValue] || 0) * (sanitize.descToValue(oldValue) || 0  )) + (groupDices[newValue] * sanitize.descToValue(newValue))
      }, 'zero')
    }

    return {
      points: y
    }
  },

  /** Based on a Object with key and value, return the total points of dices with same value
   * @param  {Object} groupDices - Object of dices grouped by quantity
   * @return {Array} Return all categories and the total points the user score.
   */
  isUnique (groupDices) {
    let response = []
    _.forIn(groupDices, ((el, key) => {
      if (el >= 1) {
        const totalPoints = el * sanitize.descToValue(key)
        response.push({
          points: totalPoints,
          category: key
        })
      }
    }))

    return response
  },

  /** Check if a quantity of elements in array of dices are ordered
   * @param  {Array} dices - Array of numbers
   * @param  {Integer} minOrdered - Minimun quantity of elements that need to be in order
   * @return {Boolean} if at least `minOrdered` elements are in ordered, than true, else false
   */
  isOrdered (dices, minOrdered) {
    let isOrdered = false
    let count = 0

    isOrdered = _.every(dices, ((value, index, array) => {
      let x = (index === 0 || array[index - 1] < value)
      if (x) count += 1
      return x
    }))

    if (count == minOrdered) {
      return true
    } else {
      return false
    }
  },

  /**
   * Check if all numbers in a dice are equals
   * @param  {Array} dices - Array of numbers 
   * @return {Boolean} true if are equals, false if at least one element are different
   */
  isEquals (dices) {
    return _.every(dices, ((value, index, array) => {
      return (index === 0 || array[index - 1] === value)
    }))
  }
}