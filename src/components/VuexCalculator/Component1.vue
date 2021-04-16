<template>
  <div>
    <h1>Component1</h1>
    <Component2 />
  </div>
</template>

<script>
import Component2 from "./Component2"
  export default {
    name: 'Component1',
    components: { Component2 }
  }
</script>