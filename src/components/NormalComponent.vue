<template>
  <div>
    <button @click="incrementCount">count</button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'NormalComponent',
  // setup(props, ctx) {
  //   onMounted(() => {
  //     console.log('props.incrementCount :>> ', props);
  //     console.log('ctx :>> ', ctx);
  //   });
  // },
  props: {
    incrementCount: { type: Function },
  },
  mounted() {
    console.log('this :>> ', this.incrementCount);
  },
  methods: {
    incrementCount() {
      this.incrementCount();
    },
  },
};
</script>
