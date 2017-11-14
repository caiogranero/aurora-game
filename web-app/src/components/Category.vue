<template>
  <div class="dice">
	<b>{{name}}</b>[{{condition}}]: <u>{{rule}}</u>
  </div>
</template>

<script>
export default {
  name: 'Category',

  props: {
    name: String,
    condition: String,
    rule: String
  }
}
</script>

<style scoped>
</style>
