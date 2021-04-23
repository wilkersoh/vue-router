<template>
  <div>
    <h1>Custom Directive</h1>
    <div v-pin> i am directive</div>
    <button class="btn-blue mr-2" v-has="'add'">add</button>
    <button class="btn-blue mr-2" v-has="'edit'">edit</button>
    <button class="btn-blue mr-2" v-has="'delete'">delete</button>
  </div>
</template>

<script>
import has from "../directive/has";
const PinDirective = {
  beforeMount(el, binding, vnode, prevVnode) {
    el.style.position = "absolute";
    el.style.right = " 120px";
    el.style.color = " red";
  },
}

export default {
  name : 'DirectiveCustom',
  directives: { pin: PinDirective, has },
}
</script>
