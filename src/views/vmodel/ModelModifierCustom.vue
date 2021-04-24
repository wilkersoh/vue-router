<template>
  <div>
    <SalutationName
      v-model:salutation.capitalize="state.salutation"
      v-model:name.capitalize="state.name"
    />
    <pre>
      {{JSON.stringify(state, null, 2)}}
    </pre>
  </div>
</template>

<script>
  import {reactive} from "vue"
  import SalutationName from "./components/SalutationName";

  export default {
    components: { SalutationName },
    setup() {
      const state = reactive({
        name: '',
        salutation: '',
      })

      return {state}
    }
  }
</script>
