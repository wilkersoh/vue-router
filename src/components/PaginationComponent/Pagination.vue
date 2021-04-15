<template>
  <div>
    <Controls
      :total-posts="posts.length"
      :posts-per-page="postPerPage"
      :paginate="paginate"
      :current-page="currentPage"
      :paginate-length="5"
      @selectNumber="selectNumber"
    />
    <button @click="trigger">trigger</button>
    <ul v-if="currentPosts.length">
      <li v-for="post in currentPosts" :key="post.id">{{ post.title }}</li>
    </ul>
    <div v-else>No posts</div>
  </div>
</template>

<script>
import { API_URL } from '../../../data/API';
import { ref, reactive, toRefs, watch } from 'vue';
import Controls from './Controls';

export default {
  name: 'Pagination',
  components: { Controls },
  setup() {
    const state = reactive({
      postPerPage: 10,
      currentPage: 1,
    });

    const posts = ref([]);

    const currentPosts = ref([]);

    const selectNumber = (e) => state.currentPage = +e.target.dataset.index;

    const trigger = () => {
      state.currentPage += 1;
      console.log('state.currentPage :>> ', state.currentPage);
    };

    const getPosts = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.status) throw new Error('No data available');

        posts.value = await res.json();
      } catch (error) {
        console.warn(error);
      }
    };

    const getCurrentPost = () => {
      const indexOfLastPost = state.currentPage * state.postPerPage;
      const indexOfFirstPost = indexOfLastPost - state.postPerPage;

      const currentPosts = posts.value.slice(indexOfFirstPost, indexOfLastPost);

      return currentPosts;
    };

    watch(
      [() => [...posts.value], () => ({ ...state })],
      (newValues, oldValues) => {
        currentPosts.value = getCurrentPost();
      }
    );

    const paginate = (pageNumber) => (state.currentPage = +pageNumber);

    getPosts();

    return {
      ...toRefs(state),
      currentPosts,
      trigger,
      posts,
      paginate,
      selectNumber
    };
  },
};
</script>

<style lang="scss" scoped></style>
