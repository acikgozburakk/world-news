import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseURL:"https://newsapi.org/v2",
    apiKey:"9718cfb964b342df87482f525cb2195c",
    headlines: [],
    technologyNews:[],
    categoryNews:[]

  },
  mutations: {
    setHeadlines(state, headline) {
      state.headlines = [];
      state.headlines = headline;
    },
    setTechnologyNews(state, news) {
      for (let index = 0; index < 8; index++) {
        state.technologyNews.push(news[index]);
      }
      
    },
    setCategoryNews(state, news){
      state.categoryNews = [];
      state.categoryNews = news
    }
  },
  actions: {
    getHeadlines({ commit, state }, country) {
      axios
        .get(`${state.baseURL}/top-headlines?country=${country}&apiKey=${state.apiKey}`)
        .then((headlines_response) => {
          commit("setHeadlines", headlines_response.data.articles || []);
        });
    },
    getTechnologyNews({ commit, state }) {
      axios
        .get(`${state.baseURL}/top-headlines?country=tr&category=technology&apiKey=${state.apiKey}`)
        .then((news_response) => {
          commit("setTechnologyNews", news_response.data.articles || []);
        });
    },
    getCategoryNews({commit,state},categoryname){
      axios
        .get(`${state.baseURL}/top-headlines?country=tr&category=${categoryname}&apiKey=${state.apiKey}`)
        .then((response => {
          commit("setCategoryNews",response.data.articles)
        }))
    }
  },
  getters:{
    headlinesList: (state) => state.headlines,
    technologyNews: (state) => state.technologyNews,
    categoryNews : (state) => state.categoryNews
  },
  modules: {
  }
})
