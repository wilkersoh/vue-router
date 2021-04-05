<template>
  <div class="modal-overlay">
    <div class="modal-content">
      <div>TeleportModal file</div>
      <slot></slot>
      <hr />
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeleportModal',
  emits: ['close'],
};
</script>

<style scoped>
.modal-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
}
.modal-content {
  padding: 20px;
  border-radius: 4px;
  display: inline-block;
  margin: auto;
  background-color: #fff;
  position: relative;
  max-width: 300px;
  justify-self: center;
}
</style>
