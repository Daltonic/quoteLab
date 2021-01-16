import axios from 'axios'
import { createStore } from "vuex"

const store = createStore({
  state: {
    images: [],
    selected: null,
    keyword: ''
  },
  mutations: {
    images: (state, payload) => (state.images.push(...payload)),
    search: (state, payload) => (state.images = payload),
    setKeyword: (state, payload) => (state.keyword = payload),
    selected: (state, payload) => (state.selected = payload),
  },
  actions: {
    setSelected: (state, payload) => state.commit('selected', payload),
    loadImages(state, payload = {}) {
      const uri = `https://pixabay.com/api/?key=4220489-ebd80a6f713e8c5b1283cbe04&q=${payload?.keyword || '%27%27=photo'}&image_type=photo&pretty=true&safesearch=true&page=${payload?.page || 1}&per_page=6`
        
        return new Promise((respond, reject) => {
            axios.get(uri)
            .then((response) => {
                state.commit("images", response.data.hits)
                respond()
            })
            .catch(() => reject());
        })
    },
    searchImages(state, payload = {}) {
      const uri = `https://pixabay.com/api/?key=4220489-ebd80a6f713e8c5b1283cbe04&q=${payload?.keyword || '%27%27=photo'}&image_type=photo&pretty=true&safesearch=true&page=${payload?.page || 1}&per_page=6`
      
      return new Promise((respond, reject) => {
          axios.get(uri)
          .then((response) => {
              state.commit("search", response.data.hits)
              respond()
          })
          .catch(() => reject());
      })
  },
  },
  getters: {
    images: state => state.images,
    selected: state => state.selected,
    keyword: state => state.keyword,
  }
})

export default store