<template>
  <div id="dice">
    <h3 v-if="dices.length > 0">Dados jogados: &nbsp; </h3>
    <p id="dices-list" v-if="dices.length > 0"> {{dices}} </p>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Dice',

  computed: {
    dices () {
      return this.$store.state.dices.map(el => _.upperFirst(el)).join(', ')
    }
  }
}
</script>

<style scoped>
#dice {
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  overflow: hidden;
  display: inline-flex;
}

#dice h3 {
  color: #525559;
  font-weight: 700;
  font-size: 1.0em;
  line-height: 1.09524;
  margin-top: 0;
  margin-bottom: 20px;
}

#dices-list {
  color: #525559;
  font-weight: 400;
  font-size: 1.0em;
  line-height: 1.09524;
  margin-top: 0;
  margin-bottom: 20px;
}
</style>
