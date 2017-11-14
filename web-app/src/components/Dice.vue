<template>
  <div class="dice">
    <input type="button" id="btn-dice" value="Rodar o dado" @click="start">
  </div>
</template>

<script>
export default {
  name: 'Dice',

  methods: {
    start () {
      console.log('throw the dice')
    }
  }
}
</script>

<style scoped>
</style>
