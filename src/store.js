import axios from 'axios'
import apiKey from './config'
import { createStore } from "vuex"

const store = createStore({
  state: {
    images: [],
    image: null,
    selected: null,
    keyword: ''
  },
  mutations: {
    images: (state, payload) => (state.images.push(...payload)),
    search: (state, payload) => (state.images = payload),
    setKeyword: (state, payload) => (state.keyword = payload),
    selected: (state, payload) => (state.selected = payload),
    setImage: (state, payload) => (state.image = payload),
  },
  actions: {
    setSelected: (state, payload) => state.commit('selected', payload),
    loadImages(state, payload = {}) {
      const uri = `https://pixabay.com/api/?key=${apiKey}&q=${payload?.keyword || '%27%27=photo'}&image_type=photo&pretty=true&safesearch=true&page=${payload?.page || 1}&per_page=6`
        
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
      const uri = `https://pixabay.com/api/?key=${apiKey}&q=${payload?.keyword || '%27%27=photo'}&image_type=photo&pretty=true&safesearch=true&page=${payload?.page || 1}&per_page=6`
      
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
    image: state => state.image,
    selected: state => state.selected,
    keyword: state => state.keyword,
  }
})

export default store