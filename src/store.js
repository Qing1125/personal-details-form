import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    details: {},
    key: "personal-info"
  },
  mutations: {
    initDetails(state) {
      if (localStorage.getItem(state.key)) {
        state.details = JSON.parse(localStorage.getItem(state.key));
      } else {
        state.details = {
          name: {
            text: "Name",
            value: "Three Amigos",
            submit: true
          },
          entityType: {
            text: "Entity Type",
            value: "Business",
            submit: false
          },
          country: {
            text: "Country",
            value: "UNITED STATES OF AMERICAN",
            submit: true
          },
          address: {
            text: "Address",
            value: "100 California Drive, CA 90210",
            submit: false
          },
          postcode: {
            text: "Postcode",
            value: "90210",
            submit: true
          },
          email: {
            text: "Email",
            value: "dustybottoms@threeaamigos.com",
            submit: false
          }
        };
      }
    },
    saveDetails(state, payload) {
      state.details = payload;
      localStorage.setItem(state.key, JSON.stringify(payload));
    },
    clearLocalStorage(state) {
      localStorage.removeItem(state.key);
    }
  },
  actions: {
    initDetails({ commit }) {
      commit("initDetails");
    },
    saveDetails({ commit }, payload) {
      commit("saveDetails", payload);
    },
    clearLocalStorage({ commit }) {
      commit("clearLocalStorage");
    },
    resetDetails({ commit }) {
      commit("clearLocalStorage");
      commit("initDetails");
    }
  }
});

export default store;
