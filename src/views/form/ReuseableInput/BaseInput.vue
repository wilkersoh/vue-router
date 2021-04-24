<template>
  <label :for="uuid">{{ label }}</label>
  <!-- 為什麼需要 $attrs
    by default 全部 props 都是 給在 第一個 div
    但是 這裡 是 multiple的 所以 需要和他說 它的 props 是放在哪裡的
    我們會把前面的 type  放過來 input裡
  -->
  <input
    class="field"
    :placeholder="label"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
  >
  <!-- aria-describedby input and p tag is link -->
  <p
    v-if="error"
    :id="`${uuid}-error`"
    class="errorMessage"
  >
    {{ error }}
  </p>
</template>

<script>
import useUniqueID from "../../../composables/useUniqueID"

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
    error: {
      type: String,
      default: '',
    }
  },
  setup() {
    const uuid = useUniqueID().getID();
    // const { getID } = useUniqueID()
    // const uuid = getID();

    return {
      uuid
    }

  }
}
</script>


<style scoped>
.errorMessage {
  color: red
}
</style>