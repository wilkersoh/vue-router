export default {
  namespaced: true,

  state: {
    count: 2,
  },

  mutations: {
    increment(state, value) {
      state.count += value;
    },
    decrement(state) {
      state.count--;
    },
  },
  actions: {
    increaseCounter({ commit }, value) {
      commit("increment", value);
    },
    decreaseCounter({ commit }) {
      commit("decrement");
    },
  },

  getters: {
    getCounterSquad: (state) => {
      console.log("state :>> ", state);
      const squad = state.count * state.count;
      return squad;
    },
    getCountValue: (state) => state.count,
  },
};
