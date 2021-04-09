<template>
  <div>
    <Hello :msg="msg" />
  </div>
</template>

<script>
import { Vue, h, render, ref } from 'vue';

const Hello = {
  props: ['msg'],
  //composition api way
  // setup() {
  //   return () => h('div', {}, 'cooool...');
  // },
  render() {
    return h('div', [h('h1', 'cooool...'), h('div', this.msg)]);
  },
};

// const Hello = Vue.component('hello', {
//   props: ['msg'],
//   template: `
//     <h1>coool</h1>
//     <div>{{ this.msg }}</div>
//   `,
// });

export default {
  name: 'HRender',
  components: { Hello },
  setup() {
    const msg = ref('some msg from parent');

    return {
      msg,
    };
  },
};
</script>
