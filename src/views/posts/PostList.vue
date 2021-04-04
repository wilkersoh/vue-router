<template>
  <div class="post-list">
    <h1>Post List</h1>

    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
    <!-- Below: DOM structure is
      <div class="1MoreDiv"><div><h1></h1><div></div>
     -->
    <!-- <div v-for="post in posts" :key="post.id" class="1MoreDiv">
      <SinglePost :post="post" />
    </div> -->
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue';

import SinglePost from './SinglePost.vue';

export default {
  props: ['posts'],
  components: { SinglePost },
  setup(props) {
    onMounted(() => console.log('component mounted'));
    onUnmounted(() => console.log('component unmount'));
    onUpdated(() => console.log('component updated'));
  },
};
</script>

<style></style>
