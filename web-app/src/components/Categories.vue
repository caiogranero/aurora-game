<template>
  <div id="categories">
    <h2>Categorias</h2>
    <div id="categories-list">
      <div id="category-item" v-for="category in categories" :key="category._id">
      	<input 
          type="radio"
          name="category-checkbox"
          id="category-checkbox"
          v-model="selected"
          :value="category._id"
          :disabled="category.disabled">
        <b>{{category.name}}</b>[{{category.description}}]: <u>{{category.rule}}</u>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',

  data () {
    return {
      selected: 0
    }
  },

  computed: {
    dices () {
      return this.$store.state.dices
    },

    categories () {
      return this.$store.state.categories
    }
  },

  watch: {
    // Select a category
    selected () {
      this.$store.commit('selectCategory', this.selected)
    },

    dices (newValue, oldValue) {
      if (newValue.length > 0) {
        // If enter in here, means that the game has start \o/
        this.categories.forEach(el => {
          el.disabled = true
        })
      } else {
        // If enter in here, means that the game were reset =/
        this.categories.forEach(el => {
          el.disabled = false
        })
        this.selected = 0
      }
    }
  },

  created () {
    // Get the categories list and insert in DOM
    this.$CategoriesService.get().then(response => {
      const categories = response.data.results.map(el => {
        return Object.assign(el, {disabled: false})
      })
      this.$store.commit('categories', categories)
    }, error => {
      flash('Erro ao obter categorias disponíveis', 'error')
    })
  }
}
</script>

<style scoped>
#categories-list {
  background: white;
  min-width: 50px;
  padding: 10px;
  border-radius: px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.07);
}

#categories-list #category {
  font-size: 0.9rem;
  margin: 0 0 0.3rem 0;
  color: #777;
}

#categories {
  width: 100%;
  padding: 0.5rem;
}

#category-item {
  margin-top: 5px;
}
</style>
