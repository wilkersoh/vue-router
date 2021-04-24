<template>
  <div>
    <router-link :to="{ name: 'Transition' }">
      <h3>go to Transtion css</h3>
    </router-link>
    <div class="about">
      <transition
        appear
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <h1 v-if="showTitle">Use javascript hook to do transition</h1>
      </transition>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus?</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, minus?</p>

    </div>

    <div class="contact">
      <transition-group
        appear
        tag="ul"
        @before-enter="listBeforeEnter"
        @enter="listEnter"
      >
        <li v-for="(list, index) in lists" :key="list.id" :data-index="index">{{ list.text }}</li>
      </transition-group>
    </div>
  </div>
</template>

<script>
import {ref} from 'vue';
import gsap from 'gsap';

export default {
  name: 'TransitionJavascriptHook',
  setup() {
    const showTitle = ref(true);
    const lists = ref([
      {text: 'must be bold', id: 1},
      {text: 'learn vuejs', id: 2},
    ])

    const beforeEnter = (el) => {
      console.log('before enter - set initial state')
      el.style.transform = 'translateY(-60px)'
      el.style.opacity = 0;
    }
    const enter = (el, done) => {
      console.log('enter -  make transition')
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        ease: 'bounce.out',
        onComplete: done // tell vue i am done for the duration time, if not it will straight started afterEnter function.
      });
    }

    const afterEnter = (el) => {
      console.log('after enter - ')
    }

    const beforeLeave = (el) => {
      el.style.color = "red"
      console.log('before leave')
    }
    const leave = (el) => {
      console.log('leave')

    }
    const afterLeave = (el) => {
      console.log('after leave')
    }

    const listBeforeEnter = (el) => {
      el.style.opacty = 0;
      el.style.transform = "translateY(100px)";
    }
    const listEnter = (el, done) => {
      gsap.to(el, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: el.dataset.index * 0.2,
        onComplete: done,
      })
    }

    return {
      showTitle,
      lists,
      beforeEnter,
      enter,
      afterEnter,
      beforeLeave,
      leave,
      afterLeave,
      listBeforeEnter,
      listEnter
    }

  }
}
</script>

<style lang="scss" scoped>
.about {
  max-width: 600px;
  margin: 20px auto;
}
// move to javascript hook
/* .fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 3s ease;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 3s ease;
} */
</style>