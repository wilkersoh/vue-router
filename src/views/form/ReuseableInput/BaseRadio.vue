<template>
  <input
    class="field"
    type="radio"
    name="pets"
    :value="value"
    :checked="modelValue === value"
    @change="$emit('update:modelValue', value)"
    v-bind="$attrs"
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
      type: [String, Number],
      default: '',
    },
    value: {
      type: [String, Number],
      required: true,
    }
  }
}
</script>
