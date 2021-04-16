<template>
  <div>
    <h1>Component3</h1>
  </div>
</template>

<script>
import {inject} from 'vue';
  export default {
    name: 'Component3',
    setup() {
      const user = inject("user");

      console.log(`user`, user)
    }
  }
</script>
