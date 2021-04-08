<template>
  <div>{{ user.name }}</div>
</template>

<script>
export default {
  name: 'LazyComponent',
  props: {
    user: {
      type: Object,
    },
  },
  mounted() {
    console.log(this.user);
  },
};
</script>
