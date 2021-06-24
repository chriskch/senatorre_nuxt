import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      slides: []
    },
    mutations: {
      SET_SLIDES(state, payload) {
        state.slides = payload;
      }
    },
    actions: {
      SET_SLIDES(vuexContext) {
        vuexContext.commit("SET_SLIDES");
      }
    },
    getters: {}
  });
};

export default createStore;
