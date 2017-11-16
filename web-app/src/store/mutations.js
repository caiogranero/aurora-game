const mutations = {
  throwDice (state) {
    const options = ['um', 'dois', 'três', 'quatro', 'cinco']
    const number = Math.floor((Math.random() * 5) + 0)
    let text = options[number]
    state.dices.push(text)
  },

  clearDice (state) {
    state.dices = []
    state.results = [],
    state.selectedCategory = []
  },

  results (state, results) {
    state.results = results
  },

  selectCategory (state, id) {
    state.selectedCategory.push(id)
  }
}

export default mutations
