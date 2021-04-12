<template>
  <div>
    <h1>I am slider</h1>
    <div class="slider">
      <ul class="sliderContent" :style="{ transformStyle }">
        <!-- <li v-for="(image, index) in images" :key="index"> -->
        <img v-for="(image, index) in images" :key="index" :src="image" />
        <!-- </li> -->
      </ul>
      <button @click="prev" class="button btn-previous">previous</button>
      <button @click="next" class="button btn-next">next</button>
    </div>
  </div>
</template>

<script>
import { ref, reactive, toRefs, watch } from 'vue';

export default {
  name: 'Slider',
  setup() {
    const images = ref([
      'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
      'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
      'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg',
    ]);

    const state = reactive({
      currentIndex: 0,
      transition: 0.45,
    });

    const transformStyle = ref('');

    const prev = () => {
      if (state.currentIndex === 0) return;
      state.currentIndex -= 1;
      console.log('click prev');
    };

    const next = () => {
      if (state.currentIndex === images.length - 1) return;
      state.currentIndex += 1;
      console.log('click next');
    };

    watch(
      () => state.currentIndex,
      (newIndex, prevIndex) => {
        const value = newIndex * 100;
        // transformStyle.value = `transform: translate3d(-${value}%, 0, 0), transition: transform ${state.transition}s ease`;
        transformS;
        console.log('transformStyle.value :>> ', transformStyle.value);
      }
    );

    return {
      ...toRefs(state),
      images,
      prev,
      next,
      transformStyle,
    };
  },
};
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  border: 2px dashed black;
  background-color: black;
  height: auto;
  .sliderContent {
    display: flex;
    width: 100%;
    height: 100%;
    // transition: transform 0.45s ease;
    /* li {
      display: flex;
      width: 100%;
      flex-shrink: 1;
      border: 2px solid blue;
    } */
    img {
      object-fit: contain;
      width: 100%;
      flex-shrink: 1;
    }
  }
  .button {
    position: absolute;
    border: 2px solid red;
    z-index: 2;
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
