<template>
  <div>
    <h2>Option API</h2>
    <input type="text" placeholder="watching" v-model="name" />
  </div>
  <div>
    <h2>Composition API (multiple watch | immediate)</h2>
    <input type="text" placeholder="watching" v-model="firstName" />
    <input type="text" placeholder="watching" v-model="lastName" />
  </div>
  <div>
    <h2>Composition API (reactive version)</h2>
    <input type="text" placeholder="watching" v-model="fName" />
    <input type="text" placeholder="watching" v-model="lName" />
    <input type="text" placeholder="watching" v-model="options.heroName" />
  </div>
</template>

<script>
import { ref, watch, reactive, toRefs } from 'vue';
import _ from 'lodash';

export default {
  name: 'WatchVue',
  setup() {
    const firstName = ref('');
    const lastName = ref('');
    const state = reactive({
      fName: '',
      lName: '',
      options: {
        heroName: '',
      },
    });

    // watch import from vue (ref verison)
    watch(
      [firstName, lastName],
      (newValue, oldValue) => {
        console.log('firstName newValue :>> ', newValue[0]);
        console.log('firstName oldValue :>> ', oldValue[0]);
        console.log('lastName newValue :>> ', newValue[1]);
        console.log('lastName oldValue :>> ', oldValue[1]);
      },
      {
        immediate: true,
      }
    );

    // watch import from vue (reactive verison) watch both
    // watch(
    //   () => {
    //     return { ...state };
    //   },
    //   (newValue, oldValue) => {
    //     console.log('fName newValue :>> ', newValue.fName);
    //     console.log('fName oldValue :>> ', oldValue.fName);
    //     console.log('lName newValue :>> ', newValue.lName);
    //     console.log('lName oldValue :>> ', oldValue.lName);
    //   }
    // );

    watch(
      () => state.fName,
      (newValue, oldValue) => {
        console.log('fName newValue :>> ', newValue);
        console.log('fName oldValue :>> ', oldValue);
      }
    );

    watch(
      // () => _.cloneDeep(state.options), // need to clone deep, if not oldvalue and new will same
      () => JSON.parse(JSON.stringify(state.options)),
      (newValue, oldValue) => {
        console.log('options newValue :>> ', newValue);
        console.log('options oldValue :>> ', oldValue);
      },
      {
        deep: true,
      }
    );

    return {
      firstName,
      lastName,
      ...toRefs(state),
    };
  },
  data() {
    return {
      name: '',
    };
  },
  watch: {
    name(newValue, oldValue) {
      console.log('newValue :>> ', newValue);
      console.log('oldValue :>> ', oldValue);
    },
  },
};
</script>
