<template>
  <div>
    <h1>Dynamic Component</h1>
    <button @click="activeTab = 'TabADynamic'">DynamicComponent A</button>
    <button @click="activeTab = 'TabBDynamic'">DynamicComponent B</button>
    <button @click="activeTab = 'TabCDynamic'">DynamicComponent C</button>

    <!-- Clean code | Keep the component alive -->
    <keep-alive>
      <component :is="activeTab" />
    </keep-alive>

    <!-- Bad | component is not alive after changed -->
    <TabADynamic v-if="activeTab === 'TabADynamic'" />
    <TabBDynamic v-if="activeTab === 'TabBDynamic'" />
    <TabCDynamic v-if="activeTab === 'TabCDynamic'" />
  </div>
</template>

<script>
import TabADynamic from '../components/TabADynamic';
import TabBDynamic from '../components/TabBDynamic';
import TabCDynamic from '../components/TabCDynamic';

export default {
  name: 'DynamicComponent',
  components: { TabADynamic, TabBDynamic, TabCDynamic },
  data() {
    return {
      activeTab: 'TabADynamic',
    };
  },
};
</script>

<style scoped></style>
