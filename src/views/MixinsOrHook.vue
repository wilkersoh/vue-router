<template>
  <div>
    <h1>Sharing same logic in component</h1>
    <p>
      Logic change from Mixin to hook, since hook is better and good
      understanding.
    </p>
    <p>
      Note: In Mixin, we can easily confuced where is the variable and function
      method came from when project going large.
    </p>
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
