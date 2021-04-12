<template>
  <div>
    <h1>I am slider</h1>
    <div class="slider">
      <ul class="sliderContent">
        <!-- <li v-for="(image, index) in images" :key="index"> -->
          <img v-for="(image, index) in images" :key="index" :src="image" />
        <!-- </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import {ref, reactive, toRefs, watch} from 'vue';

  export default {
    name: 'Slider',
    setup() {
      const images = ref([
        "https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg"
      ]);

      const state = reactive({
        currentIndex: 0,
        timer: null,
      })

      const initSlide = () => {

      }
      const prev = () => {
        if(state.currentIndex === 0) return;
        state.currentIndex -= 1;
      }


      const next = () => {
        if(state.currentIndex === images.length - 1) return;
        state.currentIndex += 1;
      }

      watch(() => {

      })


      return {
        ...toRefs(state),
        images,
      }
    }
  }
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  margin: 0 auto;
  /* overflow: hidden; */
  border: 2px dashed black;
  background-color: black;
  height: 400px;
  .sliderContent {
    display: flex;
    width: 100%;
    height: 100%;
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
}
</style>