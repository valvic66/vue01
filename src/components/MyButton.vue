<template>
    <div 
      class="button" 
      v-bind:class="{ small: isSmall, large: isLarge }"
      v-on:click="onButtonClick"
    >
        {{ buttontitle }}
    </div>
</template>

<script>
export default {
  name: "MyButton",
  props: ["buttontitle", "isSmall", "isLarge"],
  data() {
    return {
      // isSmall: true,
      // isLarge: false
    }
  },
  methods: {
    onButtonClick: function () {
      this.$emit('clicked')
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.button {
  font-size: .8em;  
  text-transform: uppercase;
  background-color: lightsalmon;
  color: black;
  border-radius: 5px;
  cursor: pointer;

  text-align: center;

  max-width: 100%;
  min-width: 80px;

  padding: 7px 30px;
}
.small {
  width: 80px;
}
.large {
  width: 150px;
}
.button:hover {
  background-color: lightskyblue;
  color: black;
  font-weight: bold;

  -webkit-transition: background-color 0.3s;
  -moz-transition: background-color 0.3s;
  transition: background-color 0.3s;
}
</style>

