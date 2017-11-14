<template>
  <div class="dice">
    <input type="button" id="btn-dice" value="Rodar o dado" @click="start">

    dados jogados: <p v-for="dice in dices">{{dice}}</p>
  </div>
</template>

<script>
import categories from '@/helpers/categories'

export default {
  name: 'Dice',

  computed: {
    dices () {
      return this.$store.state.dices
    }
  },

  methods: {
    start () {
      this.$store.commit('throwDice')
    },

    calculate () {
      if (dices.length === 6) {

      }
    }    
  }
}
</script>

<style scoped>
</style>
