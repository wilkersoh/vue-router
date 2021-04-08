<template>
  <div>
    <SameFileComponent msg="Props value from parent" />
  </div>
</template>

<script>
import Vue, { h, render } from 'vue';

// const SameFileComponent = {
//   props: ['msg'],
//   render(h) {
//     return h('div', [h('h1', 'Check Code I am Component'), h('div', this.msg)]);
//   },
// };

const SameFileComponent = {
  props: ['msg'],
  template: `
    <h1>CCCC halo</h1>
    <div>{{ this.msg }}</div>
  `,
};

export default {
  name: 'MutilpleComponentInOneFile',
  components: {
    SameFileComponent,
  },
};
</script>
