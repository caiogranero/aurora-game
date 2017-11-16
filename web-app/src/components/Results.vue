<template>
  <div id="results">
    <h2>Resultados</h2>
    <div id="results-list">
      <p v-for="result in results"> {{result}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Results',

  computed: {
    results () {
      return this.$store.state.results
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
</style>
