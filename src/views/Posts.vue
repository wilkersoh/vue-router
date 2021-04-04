<template>
  <div>Post Lists</div>
  <PostList v-if="showPosts" :posts="posts" />
  <button @click="showPosts = !showPosts">toggle posts</button>
  <button @click="deletePost">delete last post</button>
</template>

<script>
import { onMounted, onUnmounted, onUpdated, ref } from 'vue';
import PostList from '../components/PostList.vue';

export default {
  name: 'Posts',
  components: { PostList },
  setup() {
    const showPosts = ref(true);

    const posts = ref([
      { title: 'welcome to the blog 1', body: 'lorem jsaas', id: 1 },
      {
        title: 'welcome to the blog 2',
        body:
          'lorem jsaas lorem jsaas lorem jsaaslorem jsaaslorem jsaaslorem jsaas lorem jsaas',
        id: 2,
      },
    ]);

    const deletePost = () => {
      console.log(posts.value);
      posts.value.pop();
    };

    return { posts, showPosts, deletePost };
  },
};
</script>
<style scoped></style>
