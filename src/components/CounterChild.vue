<template>
  <div class="counter-item">
    <div class="counter-item-text" v-on:click="incrementCounterList">{{ todoItem }}</div>
    <div class="counter-item-button">
      <button v-on:click="incrementCounterButton">{{ counterButton }} times button clicked, {{ counterList }} times list clicked</button>
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

    width: 100%;
    padding: 5px 0;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .counter-item-text {
    /* background-color: lightblue; */
    color: white;

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
    flex: 3;
    text-align: right;
    margin-right: 1em;
  }
  .counter-item-button button {
    padding: 2px 20px;
  }

</style>

