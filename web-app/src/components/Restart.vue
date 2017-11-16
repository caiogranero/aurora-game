<template>
  <div class="restart">
    <input type="button" id="btn-restart" value="Recomeçar o jogo" @click="restart">
  </div>
</template>

<script>
export default {
  name: 'Restart',

  methods: {
    restart () {
      this.$store.commit('clearDice')
    }
  }
}
</script>

<style scoped>

#btn-restart {
  position: fixed;
  bottom: 0px;
  left: 0px;
  cursor: pointer;
  right: 0px;
  width: 100%;
  height: 50px;
  z-index: 99;
  background: rgba(239, 83, 80,0.9);
  border: none;
  outline: none;
  padding-left: 55px;
  padding-right: 55px;
  color: white;
  font-weight: 400;
}

</style>
