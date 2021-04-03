<template>
  <h1>Composition Api Page</h1>
  <h1>Ref</h1>
  <p>{{ user.name }} and age is {{ user.age }}</p>
  <button @click="handleClick">Click me</button>
  <input type="text" v-model="user.name" />
  <h2>Reactive</h2>
  <p>{{ userOther.name }} and age is {{ userOther.age }}</p>
  <button @click="updateUserOther">Update other user</button>
</template>

<script>
import { ref, reactive } from 'vue';

export default {
  name: 'CompositionApi',
  setup() {
    console.log('setup first');
    const user = ref({ name: 'yee', age: 30 });

    const userOther = reactive({ name: 'laoyeche', age: 25 });

    const updateUser = () => {
      user.value.age = 40;
    };
    const updateUserOther = () => {
      userOther.age = 10; // didn't use .value
    };

    // reactive cannot use with Primitive value. it wouldn't change from the view.
    // Note: use ref is better.

    return { user, userOther, updateUser, updateUserOther };
  },
  created() {
    console.log('created second');
  },
  mounted() {
    console.log('mounted third');
  },
};
</script>
