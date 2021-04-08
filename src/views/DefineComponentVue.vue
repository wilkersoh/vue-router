<template>
  <div>
    <h1>DefineComponentVue {{ count }}</h1>

    <PassPropsFromParent :increment="increment" />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import PassPropsFromParent from '../components/PassPropsFromParent';

export default defineComponent({
  setup() {
    const count = ref(null);

    const increment = () => {
      console.log('hi');
      count.value += 1;
    };

    return { count, increment };
  },
  components: { PassPropsFromParent },
});
</script>
