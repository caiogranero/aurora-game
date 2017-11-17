<template>
  <div id="game">
    <categories></categories>
    <dice></dice>
    <hr v-if="results.length > 0">
    <results v-if="results.length > 0"></results>
    <play v-if="dicesLength <= 5"></play>
    <restart v-if="dicesLength === 5"></restart>
  </div>
</template>

<script>
import Dice from '@/components/Dice'
import Categories from '@/components/Categories'
import Play from '@/components/Play'
import Restart from '@/components/Restart'
import Results from '@/components/Results'

export default {
  name: 'Game',

  components: { Dice, Categories, Play, Results, Restart },

  computed: {
    dicesLength () {
      return this.$store.state.dices.length
    },
    results () {
      return this.$store.state.results
    }
  },

  watch: {
    results () {
      if (this.results.length > 0) {
        window.setTimeout(() => {
          window.scrollTo(0, document.body.offsetHeight)
        }, 10)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#game {
  list-style: none;
  background: none;
  margin: 0;
  padding: 0 60px 50px 40px;
  margin-top: 60px;
  margin-bottom: 10px;
}

</style>
