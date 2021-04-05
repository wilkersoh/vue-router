<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |

    <!-- <router-link
      v-for="(route, i) in routes"
      :key="i"
      :to="{ name: route.name }"
    >
      {{ route.name }}
    </router-link> -->

    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }"
      >Jobs (pass params from router)</router-link
    >
    |
    <router-link :to="{ name: 'CompositionApi' }">CompositionApi</router-link> |
    <router-link :to="{ name: 'Composables' }"
      >Composables (customHook)</router-link
    >
    |
    <router-link :to="{ name: 'FormVue' }">FormVue</router-link>
    |
    <router-link :to="{ name: 'DynamicComponent' }"
      >DynamicComponent</router-link
    >
    |
    <router-link :to="{ name: 'TeleportVue' }">TeleportVue</router-link>
    |
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <button @click="showPopup = true">{{ popupData }} Open popup</button>
  <InputComponent v-model="inputName" />

  <Popup v-show="showPopup" @closePopup="handleClosePopup" :title="popupData" />

  <router-view />
</template>

<script>
import { routes } from './router';
import Popup from './components/Popup';
import InputComponent from './components/InputComponent';

export default {
  components: {
    Popup,
    InputComponent,
  },
  data() {
    return { routes: [], showPopup: false, popupData: '', inputName: '' };
  },
  created() {
    this.routes = routes;
    console.log('routes :>> ', routes);
    console.log('this.inputName :>> ', this.inputName);
  },
  methods: {
    redirect() {
      this.$router.push({
        name: 'Home',
      });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(1);
    },
    handleClosePopup(value) {
      this.showPopup = false;
      this.popupData = value;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
