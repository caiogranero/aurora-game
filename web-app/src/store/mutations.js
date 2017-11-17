import _ from 'lodash'

const mutations = {
  // Generate the next value from the dices
  // Simulate a phisical dice game
  newDice (state, dice) {
    state.dices.push(dice)
  },

  // Clean all keys variables, sabe as restart the game
  clearDice (state) {
    window.flash('Jogo reiniciado', 'info')
    state.dices = []
    state.results = []
    state.selectedCategory = {}
  },

  // Calculate min, max and current user points basead possible results
  results (state, results) {
    const maxPoints = _.maxBy(results, el => {
      return el.totalPoints
    })

    const minPoints = _.minBy(results, el => {
      return el.totalPoints
    })

    const userPoints = _.find(results, el => {
      return el.category === state.selectedCategory.name
    })

    state.maxPoints = maxPoints
    state.minPoints = minPoints
    state.userPoints = (userPoints || {
      totalPoints: 0,
      category: state.selectedCategory.name
    })
    state.results = results
  },

  // Save the category info selected by the user
  selectCategory (state, id) {
    const userCategory = _.find(state.categories, category => {
      return category._id === id
    })
    state.selectedCategory = userCategory
  },

  // Save the categories search in microservice
  categories (state, categories) {
    state.categories = categories
  }
}

export default mutations
