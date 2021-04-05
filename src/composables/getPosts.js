import { reactive, toRefs } from 'vue';

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const getPosts = () => {
  const state = reactive({
    error: null,
    posts: [],
  });

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/posts');

      if (!data.ok) {
        throw Error('No data available');
      }
      await sleep(2000);
      state.posts = await data.json();
    } catch (err) {
      state.error = err.message;
    }
  };

  return {
    ...toRefs(state),
    load,
  };
};

export default getPosts;
