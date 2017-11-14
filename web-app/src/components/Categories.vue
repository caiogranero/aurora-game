<template>
  <div class="dice">
	<category
		v-for="category in categories"
		:name="category.name"
		:condition="category.condition"
		:rule="category.rule"
		:key="category._id"
	></category>
  </div>
</template>

<script>
import Category from '@/components/Category'
import categories from '@/helpers/categories'

export default {
  name: 'Categories',

  components: { Category },

  data () {
    return {
      categories: categories
    }
  },

  created () {

  }
}
</script>

<style scoped>
</style>
