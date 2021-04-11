<template>
  <div id="nav">
    <ul>
      <li v-for="(route, i) in routes" :key="i">
        <router-link :to="{ name: route.name }">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>
  <button @click="showPopup = true">{{ popupData }} Open popup</button>
  <InputComponent v-model="inputName" />

  <Popup v-show="showPopup" @closePopup="handleClosePopup" :title="popupData" />

  <router-view v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <div class="footer"></div>
</template>

<script>
import { routes } from './router';
import Popup from './components/Popup';
import InputComponent from './components/InputComponent';

export default {
  components: {
    Popup,
    InputComponent
  },
  data() {
    return { routes: [], showPopup: false, popupData: '', inputName: '' };
  },
  created() {
    const filtered = routes.filter((route) => {
      if (!route.name || route.path.indexOf(':') >= 0) return false;

      return true;
    });

    this.routes = filtered;
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

#nav ul {
  list-style: none;
}

#nav ul li {
  display: inline-block;
  border: 1px solid #333;
  padding: 4px 6px;
  margin-top: 2px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.footer {
  padding: 2rem;
}

/* Transition route */
.route-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: all 0.3s ease-out
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
