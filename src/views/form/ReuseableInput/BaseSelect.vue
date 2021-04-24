<template>
  <label v-if="label">{{ label }}</label>
  <select
    class="field"
    :value="modelValue"

    v-bind="{ // make it object, and bind them (class, attrs, @onChange , etc) together
      ...$attrs,
      onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >{{ option }}</option>
  </select>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    }
  }
}
</script>
