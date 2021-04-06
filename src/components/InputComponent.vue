<template>
  <div class="custom">
    <input
      type="text"
      placeholder="need use vue tool to check, is it updated."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'InputComponent',
  props: {
    modelValue: String,
  },
};
</script>

<style scoped>
.custom {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}
input[type='text'] {
  display: block;
  width: 400px;
  padding: 6px 12px;
  line-height: 1.4;
  color: #555;
  border: 1px solid #666;
  border-radius: 10px;
}
input[type='text']:focus {
  outline: none;
}
</style>
