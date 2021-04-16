<template>
  <div>
    <h1>VuexCalculator</h1>
    <h1>{{ counter }}</h1>
    <input class="field" v-model="value" type="number" />
    <Component1 />
  </div>
</template>

<script>
import {provide, reactive, toRefs, computed} from "vue";
import {useStore} from 'vuex';

import Component1 from '../components/VuexCalculator/Component1.vue'
  export default {
    name: 'VuexCalculator',
    components: { Component1 },
    setup() {
      const store = useStore();

      const user = reactive({
        name: 'Wilker',
        age: '18',
      });

      const counter = reactive({
        value: 1,
        counter: computed(() => store.getters["counter/getCountValue"]),
      });

      provide("user", user);

      return  {
        ...toRefs(counter)
      }
    }
  }
</script>
