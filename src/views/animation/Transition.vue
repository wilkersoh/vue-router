<template>
  <div class="flex flex-col">
    <router-link :to="{ name: 'TransitionJavascriptHook' }">
      <h3>go to Transtion from javascript hook</h3>
    </router-link>
    <transition name="toast">
      <ToastTransition v-if="showToast" />
    </transition>
    <div class="w-full md:w-2/3 mx-auto">
      <h1>Transition animate component</h1>
      <TodoTransition @badValue="triggerToast" />

      <button class="btn-blue mt-2" @click="show = !show">Show transition</button>
      <transition name="fade">
        <div v-if="show">Transition from vue</div>
      </transition>
    </div>
  </div>
</template>

<script>
import {ref} from "vue";
import TodoTransition from "@/components/TodoTransition";
import ToastTransition from "@/components/ToastTransition";

export default {
  name: 'Transition',
  components: {TodoTransition, ToastTransition},
  setup() {
    const showToast = ref(false);
    const show = ref(false)

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const triggerToast = async () => {
      showToast.value = true;

      await delay(3000);

      showToast.value = false
    }

    return {
      show,
      showToast,
      triggerToast,
    }
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 2s ease
}
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 550ms ease
}
/* Toast */
/* .toast-enter-from {
  opacity: 0;
  transform: translateY(-80px);
}
.toast-enter-to {
  opacity: 1;
  transform: translateY(0);
} */
.toast-enter-active {
  animation: wobble 0.5s ease;
  /* transition: all 1000ms ease */
}

@keyframes wobble {
  0% { opacity: 0; transform: translateY(-80px)}
  50% { opacity: 1; transform: translateY(0) }
  60% { transform: translateX(8px) }
  70% { transform: translateX(-8px) }
  80% { transform: translateX(4px) }
  90% { transform: translateX(-4px) }
  100% { transform: translateX(0) }
}

.toast-leave-from {
  transform: translateY(0);
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-80px);
}
.toast-leave-active {
  transition: all 550ms ease
}


</style>