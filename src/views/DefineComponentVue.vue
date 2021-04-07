<template>
  <div>
    <h1>DefineComponentVue {{ count }}</h1>

    <NormalComponent :incrementCount="increment" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import NormalComponent from '../components/NormalComponent';

export default defineComponent({
  setup() {
    const count = ref(null);

    const increment = () => {
      console.log('hi');
      count.value += 1;
    };

    return { count, increment };
  },
  components: { NormalComponent },
});
</script>
