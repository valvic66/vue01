<template>
  <div class="counter-wrapper">
    <h1>Select Parent /Child (Pls click list item and button, check console as well)</h1>
    <h2>{{ totalClicked }} times all clicked</h2>
    <div class="counter-child">
      <counter-child
        v-for="(item, key) in items"
        v-bind:todo-item="key + ' - ' + item.content"
        v-bind:key="key"
        v-on:listclicked='onListClick(key, item.content); incrementTotal();'
        v-on:buttonclicked="incrementTotal"
      ></counter-child>
    </div>
  </div>
</template>


<script>
import CounterChild from './CounterChild'

export default {
  name: 'CounterParent',
  props: [''],
  data() {
    return {
      items: [
        {content: 'HTML', done: true},
        {content: 'CSS', done: true},
        {content: 'JavaScript', done: true},
        {content: 'Vue JS', done: false}
      ],
      totalClicked: 0
    }
  },
  components: {
    CounterChild
  },
  methods: {
    onListClick: function (key, content) {
      console.log (`${key} -> ${content}`)
    },
    incrementTotal: function () {
      this.totalClicked += 1
    }
  }
}
</script>

<style scoped>
  .counter-wrapper {
    margin: 0 auto;
  }
  .counter-child {
    width: 500px;
    margin: 0 auto;
  }
</style>

