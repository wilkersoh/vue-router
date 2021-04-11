<template>
<div>
  <h2>TeleportVue</h2>
  <button @click="showModal = true">Show teleport</button>
  <teleport to="#portal-root">
    <teleport-modal v-show="showModal" @close="handleClose">
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam fuga
        voluptatum culpa expedita placeat laudantium, facere commodi unde, fugit
        veniam odit, doloribus perferendis asperiores est. Cum excepturi
        veritatis maiores commodi?
      </p>
    </teleport-modal>
  </teleport>
  </div>
</template>

<script>
import TeleportModal from '../components/TeleportModal';

export default {
  name: 'TeleportVue',
  components: { TeleportModal },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    handleClose() {
      this.showModal = false;
    },
  },
};
</script>
