<template>
  <div>
    <Airport />
  </div>
</template>

<script>
import Airport from './components/Airport.vue'

export default {
  name: 'App',
  components: {
    Airport
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
