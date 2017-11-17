import axios from 'axios'

const DicesInstance = axios.create({
  baseURL: '/api/dices',
  timeout: 3000
})

export default {
  install (Vue) {
    const DicesService = {
      name: 'DicesService',
      get () {
        return DicesInstance.get('/')
      }
    }

    Vue.$DicesService = DicesService
    Vue.prototype.$DicesService = DicesService
  }
}
