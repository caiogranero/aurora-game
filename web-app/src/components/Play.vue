<template>
  <div class="play">
    <input type="button" id="btn-play" value="Rodar o dado" @click="start">
  </div>
</template>

<script>
export default {
  name: 'Play',

  data () {
    return {
      results: []
    }
  },

  computed: {
    dices () {
      return this.$store.state.dices
    },

    selectedCategory () {
      return this.$store.state.selectedCategory
    }
  },

  watch: {
    dices () {
      if (this.dices.length === 5) {
        this.calculate()
      }
    }
  },

  methods: {
    start () {
      // Only throw a dice if there are minor than five played and a category were selected
      if (this.dices.length < 5 && this.selectedCategory && (Object.keys(this.selectedCategory).length > 0)) {
        this.$DicesService.get().then(response => {
          this.$store.commit('newDice', response.data.results)
        })
      } else {
        window.flash('Necessário selecionar uma categoria', 'warning')
      }
    },

    calculate () {
      // Make a request to calculate all possible results based on throwed dices
      this.$GameService.game({dices: this.dices}).then(response => {
        this.$store.commit('results', response.data.results)
      }, error => {
        window.flash(`Erro ao obter resultados da partida ${error.toString()}`, 'error')
      })
    }
  }
}
</script>

<style scoped>

#btn-play {
  position: fixed;
  bottom: 0px;
  left: 0px;
  cursor: pointer;
  right: 0px;
  width: 100%;
  height: 50px;
  z-index: 99;
  background: rgba(81, 81, 239, 0.8);
  border: none;
  outline: none;
  padding-left: 55px;
  padding-right: 55px;
  color: white;
  font-weight: 400;
}

</style>
