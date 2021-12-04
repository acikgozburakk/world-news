import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL:"https://newsapi.org/v2",
    apiKey:"9718cfb964b342df87482f525cb2195c",
    headlines: []

  },
  mutations: {
    setHeadlines(state, headline) {
      state.headlines = headline;
    },
  },
  actions: {
    getHeadlines({ commit, state }, country) {
      axios
        .get(`${state.baseURL}/top-headlines?country=${country}&apiKey=${state.apiKey}`)
        .then((headlines_response) => {
          commit("setHeadlines", headlines_response.data.articles || []);
        });
    },
  },
  getters:{
    headlinesList: (state) => state.headlines,
  },
  modules: {
  }
})
