<template>
  <div>
    <button @click="incrementCount">Click {{ count }} times</button>
  </div>
</template>

<script>
import CounterMixin from '../mixins/counter';

export default {
  name: 'ClickMixinsComponentA',
  mixins: [CounterMixin],
};
</script>
