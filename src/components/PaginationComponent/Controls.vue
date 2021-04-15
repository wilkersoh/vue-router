<template>
  <div>
    Controls {{ currentPage }}
    <ul class="paginate-container">
      <li @click="paginate(number)" v-for="number in pageNumbers" :key="number" :class="{ active: currentPage === number }">{{ number }}</li>
    </ul>
  </div>
</template>

<script>
import {toRefs, computed} from "vue";

export default {
  name: 'Controls',
  props: {
    totalPosts: {
      type: Number,
    },
    postsPerPage: {
      type: Number,
    },
    paginate: {
      type: Function,
    },
    currentPage: {
      type: Number,
    },
    paginateLength: {
      type: Number,
    },
  },
  setup(props) {
    const { totalPosts, postsPerPage, paginate, currentPage , paginateLength } = toRefs(props);

    const pageNumbers = computed(() => {
      let pageNumbers = [];
      let pages = Math.ceil(totalPosts.value / postsPerPage.value);

      // currentPage = 5; paginateLength = 5; 5 / 2 = 2; maxLeft = 5 - 2 = 3
      let maxLeft = currentPage.value - Math.floor(paginateLength.value / 2); // if click 5 then show 3 4, that is 2 mean, the nearest 2 number
      let maxRight = currentPage.value + Math.floor(paginateLength.value / 2);

      if (maxLeft < 1) {
        maxLeft = 1;
        maxRight = paginateLength.value;
      }

      if (maxRight > pages) {
        maxLeft = pages - (paginateLength.value - 1);

        maxRight = pages;
        if (maxLeft < 1) maxLeft = 1;
      }

      for (let page = maxLeft; page <= maxRight; page++) {
        pageNumbers.push(page);
      }
      console.log(`pageNumbers`, pageNumbers)
      return pageNumbers;
    });

    return {
      currentPage,
      pageNumbers,
      paginate
    }
  },
};
</script>

<style lang="scss" scoped>
.paginate-container {
  display: flex;
  justify-content: center;
  li {
    width: 2rem;
    padding: 6px 0;
    border: 2px solid black;
    &.active {
      background-color: black;
      color: #fff;
    }
    &:not(:first-child) {
      margin-left: 10px;
    }
  }
}
</style>
