<template>
  <div id="category">
	 <input type="checkbox" name="category-checkbox" id="category-checkbox" v-model="category" :value="id" >
   <b>{{name}}</b>[{{description}}]: <u>{{rule}}</u>
  </div>
</template>

<script>
export default {
  name: 'Category',

  props: {
    id: Number,
    name: String,
    description: String,
    rule: String
  },

  data () {
    return {
      category: 0
    }
  },

  watch: {
    category () {
      console.log(document.getElementById('category-checkbox').value)
      // this.$store.commit('selectCategory', document.getElementById())
    }
  }
}
</script>

<style scoped>
</style>
