<template>
  <div>
    Controls
  </div>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    paginateLength: {
      type: Number,
    },
    totalPosts: {
      type: Number,
    },
  },
  setup() {
    //
    console.log('i am controls');
  },
};
</script>

<style lang="scss" scoped></style>
