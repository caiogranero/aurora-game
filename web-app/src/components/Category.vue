<template>
  <div class="dice">
	<b>{{name}}</b>[{{description}}]: <u>{{rule}}</u>
  </div>
</template>

<script>
export default {
  name: 'Category',

  props: {
    name: String,
    description: String,
    rule: String
  }
}
</script>

<style scoped>
</style>
