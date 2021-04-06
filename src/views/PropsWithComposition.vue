<template>
  <div>
    <input type="text" placeholder="first name" v-model="firstName" />
    <input type="text" placeholder="last name" v-model="lastName" />
    <div>
      <PropsChildComposition
        :lastName="lastName"
        :firstName="firstName"
        @callHeroes="callFn"
      />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import PropsChildComposition from '../components/PropsChildComposition';
export default {
  name: 'PropsWithComposition',
  components: { PropsChildComposition },
  setup() {
    const firstName = ref('');
    const lastName = ref('');

    function callFn(hero) {
      console.log(`calling ${hero}`);
    }
    // const callHeroes = (hero) => {
    //   console.log(`calling ${hero}`);
    // };

    return {
      firstName,
      lastName,
      callFn,
    };
  },
};
</script>
