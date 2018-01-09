<template>
  <div id="app">
    <p>by Micu Valentin</p>
    <break></break>
    <instant-search></instant-search>
    <break></break>
    <to-do title="Todo tasks"></to-do>
    <break></break>
    <conditional-services></conditional-services>
    <break></break>
    <counter-parent></counter-parent>
    <break></break>
    <navigation-menu></navigation-menu>
    <break></break>
  </div>
</template>

<script>
import Break from "./components/Break";
import InstantSearch from "./components/InstantSearch";
import ToDo from "./components/ToDo";
import ConditionalServices from "./components/ConditionalServices";
import NavigationMenu from "./components/NavigationMenu";
import CounterParent from "./components/CounterParent";

export default {
  name: "app",
  data() {
    return {
    }
  },
  components: {
    Break,
    InstantSearch,
    ToDo,
    NavigationMenu,
    CounterParent,
    ConditionalServices
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
body {
  background-color: transparent;
}

</style>

<style scoped>
.my-button {
  width: 200px;
}
</style>
