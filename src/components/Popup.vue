<template>
  <div>
    <h2>This is a popup</h2>
    <input type="text" v-model="name" placeholder="typing something" />
    <button @click="$emit('closePopup', name)">
      Close popup
    </button>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  emits: {
    closePopup: (name) => {
      if (!name) return false;
      return true;
      // still can close but show warning in console.log
    },
  },
  data() {
    return {
      name: '',
    };
  },
};
</script>

<style lang="scss" scoped></style>
