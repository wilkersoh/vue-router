<template>
  <!-- Vertical then use div tag else span -->
  <component
    v-for="option in options"
    :key="option"
    :is="vertical ? 'div' : 'span'"
  >
    <BaseRadio
      :label="option.label"
      :value="option.value"
      :name="name"
      :modalValue="modalValue"
      @update:modalValue="$emit('update:modalValue', $event)"
    />
  </component>

  <!-- <BaseRadio
      v-for="option in options"
      :key="option"
      :label="option.label"
      :value="option.value"
      :name="name"
      :modalValue="modalValue"
      @update:modalValue="$emit('update:modalValue', $event)"
    /> -->
</template>

<script>
import BaseRadio from './BaseRadio';

export default {
  components: {BaseRadio},
  props: {
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modalValue: {
      type: [String, Number],
      required: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    }
  }
}
</script>
