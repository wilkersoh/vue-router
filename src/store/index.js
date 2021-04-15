// import { createApp } from "vue";
import { createStore } from "vuex";

// Create a new store instance.
const state = {
  count: 0,
};

const mutations = {
  increment(state, value) {
    state.count += value;
  },
  decrement(state) {
    state.count--;
  },
};

const actions = {
  increaseCounter({ commit }, value) {
    commit("increment", value);
  },
  decreaseCounter({ commit }) {
    commit("decrement");
  },
};

export default createStore({
  state,
  mutations,
  actions,
});
