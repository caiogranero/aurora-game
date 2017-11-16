<template>
  <div id="app">
    <div class="menu">
      <div class="name">Aurora</div>
      <div class="reset" @click="$store.commit('clearDice')">
        <icon name="refresh" scale="2"></icon>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'app'
}
</script>

<style>
html, body {
  background: #E0E0E0;
  font-family: 'Lato', sans-serif;
  margin: 0px auto;
}

.menu {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 50px;
  background: rgba(239, 83, 80,0.9);
  z-index: 100;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: default;
}

.name {
  position: absolute;
  top: 5px;
  left: 20px;
  font-size: 25px;
  font-weight: 300;
  color: rgba(255,255,255,0.98);
}

.reset {
  position: absolute;
  top: 5px;
  right: 20px;
  font-size: 25px;
  font-weight: 300;
  color: rgba(255,255,255,0.98);
  cursor: pointer;
}


h2 {
  color: #525559;
  font-weight: 500;
  font-size: 1.8em;
  line-height: 1.09524;
  margin-top: 0;
  margin-bottom: 20px;
}
</style>
