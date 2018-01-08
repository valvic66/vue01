<template>
  <div class="todos effect" v-cloak>
    <h2 style="padding-top: 20px; text-align: center;" class="todos_title">{{ title }}</h2>
    <div class="input-wrapper">
      <input type="text" v-model="inputText" v-on:keypress.enter="addTask" placeholder="Enter the new todo task" />
      <my-button class="my-button" v-on:clicked="addTask" buttontitle="Add Task" v-bind:isSmall='true'></my-button>
    </div>
    <h4 style="margin-bottom: 10px;">Input text: {{ inputText }}</h4>
    <p class="todos_none" v-if="!todos.length">No todos</p>
    <ol>
      <li
        v-for="(todo, index) in todos"
        v-bind:key="index"
        :class="{ completed: todo.done }"                                                                                                           
        @click="todo.done = !todo.done"
      >{{ todo.content }}<button style="padding: 1px 5px;" v-on:click="deleteTask(index)">Delete</button></li>
    </ol>
  </div>
</template>


<script>
import MyButton from "./MyButton";

export default {
  name: "ToDo",
  props: ["title"],
  data() {
    return {
      // title: 'todos',
      todos: [
        { content: "HTML", done: true },
        { content: "CSS", done: true },
        { content: "JavaScript", done: true },
        { content: "Vue JS", done: false },
        { content: "Angular JS", done: false }
      ],
      inputText: ""
    };
  },
  methods: {
    addTask: function() {
      if (this.inputText !== "") {
        this.todos.push({
          content: this.inputText,
          done: false
        });
        this.inputText = "";
      }
    },
    deleteTask: function(index) {
      this.todos.splice(index, 1);
    }
  },
  components: {
    MyButton
  }
};
</script>


<style scoped>
[v-cloak] {
  display: none;
}
* {
  margin: 0;
  padding: 0;
}
.todos {
  max-width: 90%;
  min-width: 360px;
  background: #fff;
  margin: 5px auto;

  text-align: left;
  padding-bottom: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;
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
.input-wrapper {
  margin-bottom: 10px;
  max-width: 90%;
}
.input-wrapper button {
  margin-left: 10px;
}
div input {
  border: none;
  width: 300px;
  height: 7px;
  padding: 11px 0;

  border-radius: 4px;
  border: solid black 1px;
  text-align: left;
  font-size: 16px;
  font-family: inherit;
  color: grey;
  outline: none;
  text-indent: 10px;
}
ol li button {
  margin-left: 10px;
}
.input-wrapper {
  width: 100%;
  margin-bottom: 1em;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.todos_title {
  margin-bottom: 15px;
}
.todos_none {
  color: red;
}
.completed {
  text-decoration: line-through;
  color: black;
}
ol {
  /* list-style: none; */
}
ol li {
  cursor: pointer;
  color: blue;
}
.my-button {
  margin-left: 10px;
}
@media screen and (min-width: 576px) {
  .todos {
    max-width: 80%;
  }
}
@media screen and (min-width: 768px) {
  .todos {
    max-width: 70%;
  }
}
@media screen and (min-width: 992px) {
  .todos {
    max-width: 60%;
  }
}
@media screen and (min-width: 1024px) {
  .todos {
    max-width: 50%;
  }
}
</style>