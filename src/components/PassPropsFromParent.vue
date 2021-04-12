<template>
  <div>
    <button @click="increment" class="px-2 border-red-500 border-2 bg-blue-500">
      count button
    </button>
  </div>
</template>

<script>

export default {
  name: 'PassPropsFromParent',
  props: ['increment'],
  setup(props, ctx) {
    console.log('props :>> ', props);
  },
  // props: {
  //   increment: { type: Function },
  // },
  // mounted() {
  //   console.log('this :>> ', this.increment);
  // },
  // methods: {
  //   increment() {
  //     this.increment();
  //   },
  // },
};
</script>
