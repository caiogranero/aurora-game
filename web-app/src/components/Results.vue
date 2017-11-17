<template>
  <div id="results">
    <h4><u>Principais resultados</u></h4>
    <p id="total-points"><u>Você pontuou</u> <strong>{{userPoints.totalPoints}} pontos</strong> na categoria <strong>{{userPoints.category}}</strong></p>
    <p id="total-points">A <u>pontuação máxima</u> foi de <strong>{{maxPoints.totalPoints}} pontos</strong> na categoria <strong>{{maxPoints.category}}</strong></p>
    <p id="total-points"> A <u>pontuação mínima</u> foi de <strong>{{minPoints.totalPoints}} pontos</strong> na categoria <strong>{{minPoints.category}}</strong></p>
    
    <br>

    <h4><u>Todos os resultados</u></h4>
    <div v-for="result in results" :key="result.category">
      <p id="total-points">A pontuação da <u>categoria</u> <strong>{{result.category}}</strong> foi de <strong>{{result.totalPoints}} pontos</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Results',

  computed: {
    results () {
      return this.$store.state.results
    },

    maxPoints () {
      return this.$store.state.maxPoints
    },

    minPoints () {
      return this.$store.state.minPoints
    },

    userPoints () {
      return this.$store.state.userPoints
    }
  }
}
</script>

<style scoped>
#results {
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0.5rem;
  overflow: hidden;
  display: grid;
}

#results-list {
  background: white;
  min-width: 50px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.07);
  overflow: hidden;
}

#total-points {
  color: #525559;
  font-weight: 400;
  font-size: 1.0em;
  line-height: 1.09524;
  margin-top: 0;
  margin-bottom: 20px;
}

#result {
  display: inline-flex;
}
</style>
