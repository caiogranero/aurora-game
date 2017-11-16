<template>
  <div id="categories">
    <h2>Categorias</h2>
    <div id="categories-list" v-for="category in categories" :key="category._id">
    	<input type="checkbox" name="category-checkbox" id="category-checkbox" :value="category.checked" v-model="category.checked" :disabled="category.disabled">
      <b>{{category.name}}</b>[{{category.description}}]: <u>{{category.rule}}</u>
      <!-- <category
    		v-for="category in categories"
    		:name="category.name"
    		:description="category.description"
    		:rule="category.rule"
        :id="category._id"
    		:key="category._id"
    	></category> -->
    </div>
  </div>
</template>

<script>
import Category from '@/components/Category'

export default {
  name: 'Categories',

  components: { Category },

  data () {
    return {
      categories: []
    }
  },

  computed: {
    dices () {
      return this.$store.state.dices
    }
  },

  watch: {
    dices (newValue, oldValue) {
      if (newValue.length > 0) {
        this.categories.map(el => el.disabled = true)
      } else {
        this.categories.map(el => {
          el.disabled = false
          el.checked = false
        })
      }
    }
  },

  created () {
    // Get the categories list and insert in DOM
    this.$CategoriesService.get().then(response => {
      this.categories = response.data.results.map(el => Object.assign(el, {checked: false, disabled: false}))
    }, error => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
#categories-list {
  background: white;
  min-width: 50px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.07);
  overflow: hidden;
}

#categories-list #category {
  font-size: 0.9rem;
  margin: 0 0 0.3rem 0;
  color: #777;
}

#categories {
  width: 100%;
  justify-content: normal;
  align-items: normal;
  padding: 0.5rem;
  overflow: hidden;
  /*display: flex;*/
  display: grid;

}
</style>
