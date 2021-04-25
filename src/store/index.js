import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    response: []
  },
  mutations: {
    set (state, dates) {
      state.response = dates.data.response;
    }
  },
  actions: {
    get ({ commit }) {
      return axios ("./entities.json", {
        method: "GET"
      })
      .then (function (dates) {
        commit ('set', dates);
      })
      .catch (function (error) {
        console.log (error);
      })
    }
  },
  modules: {
  }
})
