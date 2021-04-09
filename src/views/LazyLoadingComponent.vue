<template>
  <div>
    <h1>Lazy Loading Component</h1>
    adsadas
    <div>why suspense not working??</div>
    <Suspense>
      <template #default>
        <AsyncUser v-for="user in users" :key="user.id" :user="user" />
      </template>
      <template #fallback>
        <span>laoding...</span>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { ref, onMounted, defineAsyncComponent, Suspense } from 'vue';
import LazyComponent from '../components/LazyComponent';
import Loading from '../components/Loading';

import sleep from '@/utils/sleep';

const AsyncUser = defineAsyncComponent({
  loader: () =>
    import('../components/LazyComponent.vue' /* webpackChunkName: "user" */),
  loadingComponent: Loading,
  delay: 200,
  suspensible: false, // ccomponent's own loading, error, delay will be ignored if it is true, by defualt it will use Suspense if Suspen in the parent chain.
});

export default {
  name: 'LazyLoadingComponent',
  components: { AsyncUser },
  setup() {
    const users = ref([]);

    const getUsers = async () => {
      console.log('sleep');
      const data = [
        { id: 1, name: 'yee' },
        { id: 2, name: 'wilker' },
        { id: 3, name: 'laoyeche' },
      ];

      await sleep(4000);
      console.log('wake up');
      users.value = data;
    };

    onMounted(() => getUsers());

    return {
      users,
    };
  },
};
</script>
