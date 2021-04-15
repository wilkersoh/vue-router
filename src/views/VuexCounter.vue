<template>
  <div>
      Count: {{count}}, {{ count }}<sup>2</sup> = {{ squad }}
      <button @click="increment">increment</button>
      <button @click="decrement">decrement</button>

  </div>
</template>

<script>
import {useStore} from 'vuex';
import {computed, ref} from 'vue';

  export default {
    name: 'VuexCounter',
    setup() {
      const squad = ref("");
      const store = useStore()
      const count = computed(() => store.state.counter.count);

      const increment = () => {
        const number = Math.floor(Math.random() * 10)
        store.dispatch('counter/increaseCounter', number);
        squad.value = store.getters['counter/getCounterSquad'];
      }

      const decrement = () => {
        store.dispatch("counter/decreaseCounter");
      }

      return {
        count,
        increment,
        decrement,
        squad
      }
    }
  }
</script>
