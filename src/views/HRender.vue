<template>
  <div>
    <Hello :msg="msg" />
  </div>
</template>

<script>
import { h, render, ref } from 'vue';

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
