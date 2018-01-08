<template>
  <div id="app">
    <instant-search></instant-search>
    <break></break>
    <to-do title="Todo tasks (Pls cross out if task completed)"></to-do>
    <break></break>
    <counter-parent></counter-parent>
    <break></break>
    <conditional-services></conditional-services>
    <break></break>
    <navigation-menu></navigation-menu>
  </div>
</template>

<script>
import Break from './components/Break'
import InstantSearch from './components/InstantSearch'
import ToDo from './components/ToDo'
import NavigationMenu from './components/NavigationMenu'
import CounterParent from './components/CounterParent'
import ConditionalServices from './components/ConditionalServices'


export default {
  name: 'app',
  components: {
    Break,
    InstantSearch,
    ToDo,
    NavigationMenu,
    CounterParent,
    ConditionalServices
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background-color: lightgray;
}
</style>

<style scoped>
  .my-button {
    width: 200px;
  }
</style>
