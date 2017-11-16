import axios from 'axios'

const CategoriesInstance = axios.create({
  baseURL: '/api/categories',
  timeout: 3000
})

export default {
  install (Vue) {
    const CategoriesService = {
      name: 'CategoriesService',
      get () {
        return CategoriesInstance.get('/')
      }
    }

    Vue.$CategoriesService = CategoriesService
    Vue.prototype.$CategoriesService = CategoriesService
  }
}
