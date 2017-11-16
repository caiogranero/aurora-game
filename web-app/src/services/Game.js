import axios from 'axios'

const GameInstance = axios.create({
  baseURL: '/api/game',
  timeout: 3000
})

export default {
  install (Vue) {
    const GameService = {
      name: 'GameService',
      game (userData) {
        return GameInstance.post('/', userData)
      }
    }
    Vue.$GameService = GameService
    Vue.prototype.$GameService = GameService
  }
}
