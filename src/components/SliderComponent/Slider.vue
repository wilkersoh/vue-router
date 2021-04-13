<template>
  <div>
    <h1>I am slider</h1>
    <div class="slider">
      <Dots
        @clickedDot="clickedDot"
        :length="images.length"
        :currentIndex="currentIndex"
      />
      <ul class="sliderContent" :style="transformStyle">
        <li v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </li>
      </ul>
      <button @click="prev" class="button btn-previous">
        &#10094; Previous
      </button>
      <button @click="next" class="button btn-next">&#10095; Next</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from 'vue';
import Dots from '@/components/SliderComponent/Dots';

export default {
  name: 'Slider',
  components: { Dots },
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const { images } = toRefs(props);

    // const images = ref([
    //   'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
    //   'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
    //   'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
    //   'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg',
    // ]);

    const state = reactive({
      currentIndex: 0,
      transition: 750,
    });

    const transformStyle = ref('');

    const prev = () => {
      if (state.currentIndex === 0) return;
      state.currentIndex -= 1;
    };

    const next = () => {
      if (state.currentIndex === images.value.length - 1) return;
      state.currentIndex += 1;
    };

    const clickedDot = (e) => {
      const selectedIndex = e.target.dataset.index;
      state.currentIndex = +selectedIndex;
    };

    watch(
      () => state.currentIndex,
      (newIndex) => {
        const value = newIndex * 100;
        transformStyle.value = {
          transform: `translate3d(-${value}%, 0, 0)`,
          transition: state.transition + 'ms',
        };
      }
    );

    return {
      ...toRefs(state),
      images,
      prev,
      next,
      transformStyle,
      clickedDot,
    };
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  overflow: hidden;
  background-color: black;
  .sliderContent {
    display: flex;
    li {
      display: flex;
      flex: 1 0 100%;
      img {
        width: 100%;
        height: 600px;
      }
    }
  }
  .button {
    position: absolute;
    color: rgb(49, 228, 13);
    cursor: pointer;
    font-size: 2rem;
    &:focus {
      outline: none;
    }
  }
  .button.btn-previous {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .button.btn-next {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
