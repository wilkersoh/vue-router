<template>
  <div>
    <button @click="incrementCount">Click {{ count }} times</button>
  </div>
</template>

<script>
import CounterMixin from '../mixins/counter';
import { useCounter } from '../composables/useCounter'; // hook

export default {
  name: 'ClickMixinsComponentA',
  // mixins: [CounterMixin],
  setup() {
    const { count, incrementCount } = useCounter();

    return {
      count,
      incrementCount,
    };
  },
};
</script>
