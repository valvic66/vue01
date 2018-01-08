<template>
  <div class="counter-wrapper effect">
    <h2 style="padding-top: 20px; text-align: center;">Select Parent /Child Components</h2>
    <h3 style="text-align: center;">{{ totalClicked }} times all clicked</h3>
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
import CounterChild from "./CounterChild";

export default {
  name: "CounterParent",
  props: [""],
  data() {
    return {
      items: [
        { content: "HTML", done: true },
        { content: "CSS", done: true },
        { content: "JavaScript", done: true },
        { content: "React JS", done: true },
        { content: "Vue JS", done: false },
        { content: "Angular JS", done: false }
      ],
      totalClicked: 0
    };
  },
  components: {
    CounterChild
  },
  methods: {
    onListClick: function(key, content) {
      console.log(`${key} -> ${content}`);
    },
    incrementTotal: function() {
      this.totalClicked += 1;
    }
  }
};
</script>

<style scoped>
.counter-wrapper {
  max-width: 90%;
  min-width: 360px;
  background: #fff;
  margin: 0 auto;
  padding-bottom: 20px;
}
.effect {
  position: relative;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.effect:before,
.effect:after {
  content: "";
  position: absolute;
  z-index: -1;
  -webkit-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  -moz-box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  top: 10px;
  bottom: 10px;
  left: 0;
  right: 0;
  -moz-border-radius: 100px / 10px;
  border-radius: 100px / 10px;
}
.effect:after {
  right: 10px;
  left: auto;
  -webkit-transform: skew(8deg) rotate(3deg);
  -moz-transform: skew(8deg) rotate(3deg);
  -ms-transform: skew(8deg) rotate(3deg);
  -o-transform: skew(8deg) rotate(3deg);
  transform: skew(8deg) rotate(3deg);
}
.counter-child {
  margin: 0 auto;
}
@media screen and (min-width: 576px) {
  .counter-wrapper {
    max-width: 80%;
  }
}
@media screen and (min-width: 768px) {
  .counter-wrapper {
    max-width: 70%;
  }
}
@media screen and (min-width: 992px) {
  .counter-wrapper {
    max-width: 60%;
  }
}
@media screen and (min-width: 1024px) {
  .counter-wrapper {
    max-width: 50%;
  }
}
</style>

