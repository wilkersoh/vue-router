<template>
  <div>
    <h2 @mouseover="incrementCount">Hover {{ count }} times</h2>
  </div>
</template>

<script>
import CounterMixin from '../mixins/counter';
import { useCounter } from '../composables/useCounter'; // hook

export default {
  name: 'ClickMixinsComponentA',
  // mixins: [CounterMixin],
  setup() {
    const { count, incrementCount } = useCounter(2, 4);

    return {
      count,
      incrementCount,
    };
  },
};
</script>
