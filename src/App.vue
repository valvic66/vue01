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
    <div style="text-align: center">- IN WORK -</div>
    <div class="product">
      <product
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      ></product>
    </div>

    <div class="shopping-cart">
      <shopping-cart></shopping-cart>
    </div>

  </div>
</template>

<script>
import Break from "./components/Break";
import InstantSearch from "./components/InstantSearch";
import ToDo from "./components/ToDo";
import ConditionalServices from "./components/ConditionalServices";
import NavigationMenu from "./components/NavigationMenu";
import CounterParent from "./components/CounterParent";
import Product from "./components/Product";
import ShoppingCart from "./components/ShoppingCart";

export default {
  name: "app",
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Product no. 1",
          price: 300,
          image: "apple_1.jpg",
          qty: 1
        },
        {
          id: 2,
          title: "Product no. 2",
          price: 500,
          image: "apple_2.jpg",
          qty: 1
        },
        {
          id: 3,
          title: "Product no. 3",
          price: 100,
          image: "apple_3.jpg",
          qty: 1
        }
      ]
    }
  },
  components: {
    Break,
    InstantSearch,
    ToDo,
    NavigationMenu,
    CounterParent,
    ConditionalServices,
    Product,
    ShoppingCart
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
.product {
  margin: 0 8px;

  display: flex;
}
.shopping-cart {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
