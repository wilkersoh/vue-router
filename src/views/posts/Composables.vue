<template>
  <div>
    <div>Post Lists</div>
    <div v-if="error">{{ error }}</div>
    <!-- Doesn't work Suspense -->
    <Suspense v-else>
      <template #default>
        <PostList v-if="showPosts" :posts="posts" />
      </template>
      <template #fallback>
        <h2>Loading....from Suspense</h2>
      </template>
    </Suspense>
    <div v-if="posts.length">
      <PostList v-if="showPosts" :posts="posts" />
    </div>
    <div v-else>
      <h2>Loading from normal....</h2>
    </div>

    <button @click="showPosts = !showPosts">toggle posts</button>
    <button @click="deletePost">delete last post</button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import PostList from './PostList.vue';
import getPosts from '../../composables/getPosts';

export default {
  name: 'Composables',
  components: { PostList },
  setup() {
    const showPosts = ref(true);

    const { posts, error, load } = getPosts();

    const deletePost = () => {
      posts.value.pop();
    };

    onMounted(async () => {
      await load();
    });

    return { posts, error, showPosts, deletePost };
  },
};
</script>
<style scoped></style>
