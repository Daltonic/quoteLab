import { createStore } from "vuex" 

Vue.use(Vuex)

const store = createStore({
  state: {
    images: [],
    selected: null
  },
  mutations: {
    images: (state, payload) => (state.images = payload),
    selected: (state, payload) => (state.selected = payload)
  },
  actions: {
    SET_IMAGES: (state, payload) => state.commit('images', payload),
    SET_SELECTED: (state, payload) => state.commit('SET_SELECTED', payload)
  },
  getters: {
    GET_IMAGES: state => state.images,
    GET_SELECTED: state => state.selected,
  }
})

export default store