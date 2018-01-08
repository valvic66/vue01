<template>
  <div class="counter-item">
    <div class="counter-item-text" v-on:click="incrementCounterList">{{ todoItem }}</div>
    <div class="counter-item-button">
      <button v-on:click="incrementCounterButton">{{ counterButton }} btn click, {{ counterList }} list item click</button>
    </div>
  </div>
</template>


<script>
export default {
  name: "CounterChild",
  props: {
    'todoItem': {
      type: String,
      required: true
    }
  },
  data () {
    return {
      counterList: 0,
      counterButton: 0
    }
  },
  methods: {
    incrementCounterButton: function () {
      this.counterButton += 1
      this.$emit('buttonclicked')
    },
    incrementCounterList: function () {
      this.counterList += 1
      this.$emit('listclicked')
    }
  },
  computed: {

  }
}
</script>


<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
  .counter-item {
    cursor: pointer;
    background-color: lightcoral;

    max-width: 100%;
    padding: 5px 0;
    margin: 0 15px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  .counter-item-text {
    /* background-color: lightblue; */
    color: white;
    font-size: .9em;

    padding: 0 10px;
    flex: 1;
    text-align: left;
    margin-left: 1em;
  }
  .counter-item-text:hover {
    font-weight: bold;
    background-color: lightslategray;
  }
  .counter-item-button {
    /* background-color: lightpink; */
    flex: 2;
    text-align: right;
    margin-right: 1em;
  }
  .counter-item-button button {
    padding: 2px 5px;
  }

</style>

