<template>
  <div>
      Count: {{count}}
      <button @click="increment">increment</button>
      <button @click="decrement">decrement</button>
  </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed} from 'vue';

  export default {
    name: 'VuexCounter',
    setup() {
      const store = useStore()
      const count = computed(() => store.state.count);

      const increment = () => {
        const number = Math.floor(Math.random() * 10);
        store.dispatch("increaseCounter", number);
      }

      const decrement = () => {
        store.dispatch("decreaseCounter");
      }

      return {
        count,
        increment,
        decrement
      }
    }
  }
</script>
