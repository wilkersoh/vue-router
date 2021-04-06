<template>
  <div>
    <h1>Sharing same logic in component</h1>
    <ClickMixinsComponentA />
    <HoverMixinsComponent />
  </div>
</template>

<script>
import ClickMixinsComponentA from '../components/ClickMixinsComponentA';
import HoverMixinsComponent from '../components/HoverMixinsComponent';

export default {
  name: 'MixinsVue',
  components: {
    ClickMixinsComponentA,
    HoverMixinsComponent,
  },
};
</script>
