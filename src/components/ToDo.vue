<template>
  <div class="todos" v-cloak>
    <h1 class="todos_title">{{ title }}</h1>
    <div class="input-wrapper">
      <input type="text" v-model="inputText" v-on:keypress.enter="addTask" placeholder="Enter the new todo task" />
      <my-button class="my-button" v-on:clicked="addTask" buttontitle="Add Task" v-bind:isSmall='true'></my-button>
    </div>
    <h4>Input text: {{ inputText }}</h4>
    <p class="todos_none" v-if="!todos.length">No todos</p>
    <ol>
      <li
        v-for="(todo, index) in todos"
        v-bind:key="index"
        :class="{ completed: todo.done }"                                                                                                           
        @click="todo.done = !todo.done"
      >{{ todo.content }}<button v-on:click="deleteTask(index)">Delete</button></li>
    </ol>
  </div>
</template>


<script>
import MyButton from './MyButton'

export default {
  name: "ToDo",
  props: ["title"],
  data() {
    return {
      // title: 'todos',
      todos: [
        {content: 'HTML', done: true},
        {content: 'CSS', done: true},
        {content: 'JavaScript', done: true},
        {content: 'Vue JS', done: false}
      ],
      inputText: ''
    }
  },
  methods: {
    addTask: function () {
      if (this.inputText !== '') {
        this.todos.push({
          content: this.inputText,
          done: false
        })
        this.inputText = ''
      }
    },
    deleteTask: function (index) {
      this.todos.splice (index, 1)
    }
  },
  components: {
    MyButton
  }
}
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
    text-align: left;

    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input-wrapper button {
    margin-left: 10px;
  }
  div input {
    /* background:#fff no-repeat 13px 13px; */
    border: none;
    width: 300px;
    height: 7px;
    padding: 11px 0;
  
    border-radius: 5px;
    border: solid black 2px;
    text-align: left;
    font-size: 16px;
    font-family: inherit;
    color: grey;
    font-weight: bold;
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
</style>