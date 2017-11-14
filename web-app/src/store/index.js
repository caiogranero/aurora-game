import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

const store = {
  state,
  mutations
}

export default new Vuex.Store(store)
