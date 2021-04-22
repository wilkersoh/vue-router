export default {
  beforeMount(el, binding, vnode, prevVnode) {
    // 這裡 的 el 會 拿不到 parentNode
  },
  mounted(el, binding, vnode) {
    // console.log("vnode :>> ", binding.instance.$store);

    const btnPermissionValue = binding.value; // value = add (v-has="'add'")

    // access vuex state
    let boolean =
      binding.instance.$store.state.buttonPermission[btnPermissionValue];

    // remove btn if state set false
    !boolean && el.parentNode.removeChild(el);
  },
};
