<template>
  <Slider :images="images" />
</template>

<script>
import {toRefs, reactive} from 'vue'
import Slider from "@/components/SliderComponent/Slider"


export default {
  name: 'SliderPage',
  components: {Slider},
  setup() {
    const state = reactive({
      images: [
        'https://cdn.pixabay.com/photo/2015/12/12/15/24/amsterdam-1089646_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/02/17/23/03/usa-1206240_1280.jpg',
        'https://cdn.pixabay.com/photo/2015/05/15/14/27/eiffel-tower-768501_1280.jpg',
        'https://cdn.pixabay.com/photo/2016/12/04/19/30/berlin-cathedral-1882397_1280.jpg',
      ]
    })

    return {
      ...toRefs(state)
    }
  }
};
</script>

