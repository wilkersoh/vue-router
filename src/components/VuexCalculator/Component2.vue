<template>
  <div>
    <h1>Component2</h1>
    <h1>mapState with nameSpace > {{ count }}</h1>
    <button @click="addIncreace">+</button>
    <Component3 />
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex';

import Component3 from "./Component3";

  export default {
    name: 'Component2',
    components: { Component3 },
    setup() {
      const store = useStore();

      const addIncreace = () => {
        store.dispatch("counter/increaseCounter", 1);
      }

      return {
        addIncreace
      }
    },
    computed: {
      ...mapState("counter", ["count"])
    }
  }
</script>