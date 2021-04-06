<template>
  <div>Hello {{ fullName }}</div>
  <button @click="sendToParent">Call Heroes</button>
</template>

<script>
import { computed } from 'vue';

export default {
  name: 'PropsChildComposition',
  setup(props, context) {
    console.log('context :>> ', context);
    const fullName = computed(() => {
      return `${props.firstName} ${props.lastName}`;
      // cannot use this.firstName. Setup function is called early.
    });

    function sendToParent() {
      console.log(this); // point to this instance
      context.emit('callHeroes', fullName.value);
    }

    // const sendToParent = () => {
    //   console.log(this); // undefined
    //   context.emit('callHeroes', fullName.value);
    // };

    return {
      fullName,
      sendToParent,
    };
  },
  emits: ['callHeroes'], // need to emits same as Options API too
  props: ['firstName', 'lastName'],
  /*
    Options API
  */
  // computed: {
  //   fullName() {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  // },
};
</script>
