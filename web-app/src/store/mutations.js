const mutations = {
  throwDice (state) {
    state.dices.push(Math.floor((Math.random() * 6) + 1))
  },

  clearDice (state) {
  	state.dices = []
  }
}

export default mutations
