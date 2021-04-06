<template>
  <div>
    <h1>Auto focus</h1>
    <input type="text" ref="inputRef" />
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'TemplateRef',
  setup() {
    const inputRef = ref(null);

    onMounted(() => {
      inputRef.value.focus();
    });

    return {
      inputRef,
    };
  },
  /**
   * Options API
   */
  // mounted() {
  //   this.$refs.inputRef.focus();
  // },
};
</script>
