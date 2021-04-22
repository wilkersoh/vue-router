import { createStore } from "vuex";
import counter from "./modules/counter";

const state = {
  buttonPermission: {
    add: true,
    edit: false,
    delete: true,
  },
};
const mutations = {
  //
};
const actions = {
  //
};

const getters = {
  //
};

export default createStore({
  modules: {
    counter,
  },
  state,
  mutations,
  actions,
  getters,
});
