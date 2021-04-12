<template>
  <div>
    <h1>Composition Api Page</h1>
    <h1>Ref</h1>
    <p>{{ user.name }} and age is {{ user.age }}</p>
    <button @click="handleClick">Click me</button>
    <input type="text" v-model="user.name" />
    <h2>Reactive</h2>
    <p>{{ userOther.name }} and age is {{ userOther.age }}</p>
    <button @click="updateUserOther">Update other user</button>
    <h2>Computed hook to use filter</h2>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <h2>watch || watchEffect (didn't trigger watch login again after clicked)</h2>
    <button @click="handleStopWatch">Stop watching</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue';

export default {
  name: 'CompositionApi',
  setup() {
    console.log('setup first');
    const user = ref({ name: 'yee', age: 30 });
    const search = ref('');
    const names = ref(['yee', 'laoyeche', 'wilker']);

    const userOther = reactive({ name: 'laoyeche', age: 25 });

    const updateUser = () => {
      user.value.age = 40;
    };
    const updateUserOther = () => {
      userOther.age = 10; // dont't need to use .value
    };

    // reactive cannot use with Primitive value. it wouldn't change from the view.
    // Note: use ref is better.

    // computed
    const matchingNames = computed(() => {
      return names.value.filter((name) => {
        /**
         * default: "wilker".includes("") > true
         * Flow:
         * 1. Run js first
         * 2. return matchingNames.value value to dom if result is true
         * 3. Dom value input changed, it didn't re-render,
         * 4. it will computed it in client side for this names.value.filter function
         * 5. instead of re-render.
         *
         */
        const result = name.includes(search.value);
        return result;
      });
    });

    // watching this "search"
    const stopWatch = watch(search, () => {
      console.log('watch function run');
    });

    const stopWatchEffect = watchEffect(() => {
      /**
       * it become dependency when put any variable value inside watchEffect
       * it will trigger this function when it changed.
       */
      console.log(
        'like react useEffect, it will run in first mounted.',
        search.value
      );
    });

    const handleStopWatch = () => {
      stopWatch();
      stopWatchEffect();
    };

    return {
      user,
      userOther,
      updateUser,
      updateUserOther,
      matchingNames,
      search,
      handleStopWatch,
    };
  },
  created() {
    console.log('created using options API second');
  },
  mounted() {
    console.log('mounted using options API third');
  },
};
</script>
