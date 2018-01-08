<template>
  <div id="app">
    <instant-search></instant-search>
    <to-do title="Todo tasks"></to-do>
    <conditional-services></conditional-services>
    <counter-parent></counter-parent>
    <break></break>
    <navigation-menu></navigation-menu>
  </div>
</template>

<script>
import Break from './components/Break'
import InstantSearch from './components/InstantSearch'
import ToDo from './components/ToDo'
import ConditionalServices from './components/ConditionalServices'
import NavigationMenu from './components/NavigationMenu'
import CounterParent from './components/CounterParent'


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
  /* text-align: center; */
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
