<template>
<!-- target.checked 而不是 value -->
  <input
    class="field"
    type="checkbox"
    v-bind="$attrs"
    :checked="modelValue"
    @input="$emit('update:modelValue', $event.target.checked)"
  >
  <label v-if="label">{{ label }}</label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Boolean,
      default: '',
    },
  }
}
</script>
