<template>
  <ul class="container-dot">
    <li @click="$emit(`clickedDot`, $event)" :data-index="index" v-for="(dot, index ) in dots" :class="{active: currentIndex === index,'dot': true}" :key="index"></li>
  </ul>
</template>

<script>
import {ref} from 'vue';

export default {
  name: 'Dots',
  props: {
    length: {
      type: Number,
      required: true
    },
    currentIndex: {
      type: Number,
      required: true,
    }
  },
  emits: ['clickedDot'],
  setup(props) {
    const dots = ref(new Array(props.length).fill(""));

    return {
      dots,
    }
  }
}
</script>

<style lang="scss" scoped>
.container-dot {
  position: absolute;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  bottom: 1.25rem;
  z-index: 1;
  .dot {
    cursor: pointer;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: rgb(138, 137, 137);
    margin: 0 4px;
    &.active {
      border: 2px solid white;
    }
  }
}
</style>