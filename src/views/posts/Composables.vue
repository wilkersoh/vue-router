<template>
  <div>Post Lists</div>
  <div v-if="error">{{ error }}</div>
  <div v-if="posts.length">
    <PostList v-if="showPosts" :posts="posts" />
  </div>
  <div v-else>
    <h2>Loading....</h2>
  </div>
  <!-- Doesn't work Suspense -->
  <!-- <Suspense v-else>
    <template #default>
      <PostList v-if="showPosts" :posts="posts" />
    </template>
    <template #fallback>
      <h2>Loading....</h2>
    </template>
  </Suspense> -->

  <button @click="showPosts = !showPosts">toggle posts</button>
  <button @click="deletePost">delete last post</button>
</template>

<script>
import { ref } from 'vue';
import PostList from './PostList.vue';
import getPosts from '../../composables/getPosts';

export default {
  name: 'Composables',
  components: { PostList },
  setup() {
    const showPosts = ref(true);

    const { error, posts, load } = getPosts();

    const deletePost = () => {
      console.log(posts.value);
      posts.value.pop();
    };

    load();

    return { posts, error, showPosts, deletePost };
  },
};
</script>
<style scoped></style>
