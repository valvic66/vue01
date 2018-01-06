<template>
  <div class="break">
    - Break between examples -
  </div>
</template>


<script>
export default {
  name: "Break",
  props: [""],
  data() {
    return {

    }
  }
}
</script>


<style scoped>
  .break {
    color:white;
    background-color: lightseagreen;
    font-weight: bold;

    max-width: 100%;
    margin: 2em 0;
    height: 1em;
    padding: 5px 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>

