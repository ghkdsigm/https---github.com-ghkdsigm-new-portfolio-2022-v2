import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state() {
    return {
      darkmode: false,
    }
  },
  mutations: {
    SET_CHANGEMODE:  (state, payload) => {
      state.darkmode = payload
    },
  },
  actions:{
    toggleDarkMode({ commit }, payload){
        commit('SET_CHANGEMODE', payload)
    }
  },
  plugins: [createPersistedState()],
})

export default store