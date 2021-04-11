<template>
  <div>
    <h1>Custom Directive</h1>
    <div v-pin> i am directive</div>
  </div>
</template>

<script>
const PinDirective = {
  beforeMount(el, binding, vnode, prevVnode) {
    el.style.position = "absolute";
    el.style.right = " 120px";
    el.style.color = " red";
  },
}


export default {
  name : 'DirectiveCustom',
  directives: {pin: PinDirective}
}
</script>
