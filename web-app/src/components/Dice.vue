<template>
  <div id="dice">
    <h4 v-if="dices.length > 0">Dados jogados: &nbsp; </h4>
    <p id="dices-list" v-if="dices.length > 0"> {{dices}} </p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Dice',

  computed: {
    dices () {
      // Format the throwed results, its a array, change to a String
      return this.$store.state.dices.map(el => _.upperFirst(el)).join(', ')
    }
  }
}
</script>

<style scoped>
#dice {
  padding: 0.5rem;
}

#dices-list {
  color: #525559;
  font-weight: 400;
  font-size: 1.0em;
  margin-top: 0;
}
</style>
