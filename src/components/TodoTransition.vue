<template>
  <div>
    <input type="text" v-model="newTodo" @keypress.enter="addTodo" placeholder="Add some todo" class="field w-full" />
    <button class="btn-blue my-2" @click="addTodo">Submit todo</button>
    <transition name="switch" mode="out-in">
      <div v-if="todos.length">
        <transition-group tag="ul" name="list" appear>
          <li v-for="todo in todos" :key="todo.id" @click="deleteTodo(todo.id)">{{ todo.text }}</li>
          </transition-group>
      </div>
      <div v-else>No todo list!</div>
    </transition>
  </div>
</template>

<script>
import {ref} from "vue";
export default {
  setup(props, {emit}) {
    const todos = ref([
      {text: 'must be bold', id: 1},
      {text: 'learn vuejs', id: 2},
    ]);

    const newTodo = ref('');

    const addTodo = () => {
      if(newTodo.value) {
        const id = Math.random();
        todos.value = [{text: newTodo.value, id}, ...todos.value]
        newTodo.value = '';
      } else {
        emit('badValue');
      }
    }

    const deleteTodo = (id) => {
      todos.value = todos.value.filter(todo => todo.id !== id);
    }

    return {
      todos,
      newTodo,
      addTodo,
      deleteTodo
    }
  }
}
</script>

<style lang="scss" scoped>
  ul {
    position: relative;
    padding: 0;
    li {
      list-style-type: none;
      display: block;
      margin-bottom: 10px;
      padding: 10px;
      background: white;
      box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
      border-radius: 10px;
      width: 100%;
      box-sizing: border-box;
      &:hover {
        cursor: pointer;
      }
    }
  }
  /* List transition */
  .list-enter-from{
    opacity: 0;
    transform: scale(0.6);
  }
  .list-enter-to {
    opacity: 1;
    transform: scale(1);
  }
  .list-enter-active{
    transition: all 0.4s ease;
  }
  .list-leave-from{
    opacity: 1;
    transform: scale(1);
  }
  .list-leave-to {
    opacity: 0;
    transform: scale(0.6);
  }
  .list-leave-active {
    transition: all 0.4s ease;
    position: absolute; /* remove part it make below take transiton to top before this disappear */
  }

  .list-move {
    transition: all 0.3s ease;
  }

  /* Switch transition */
  .switch-enter-from,
  .switch-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  .switch-enter-to,
  .switch-leave-from {
    opacity: 1;
    transform: translateY(0)
  }
  .switch-enter-active,
  .switch-leave-active {
    transition: all 0.5s ease;
  }

</style>