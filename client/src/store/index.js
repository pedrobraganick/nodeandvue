import { Axios } from 'axios';
import { createStore } from 'vuex'
const getDefaultState = () => {
  return {
    token: '',
    user: ''
  };
};
export default createStore({
  state: getDefaultState(),
  getters: {
    isLoggedIn: state => {
      return state.token;
    },
    getUser: state => {
      return state.user;
    },
    getNome: state => {
      return state.nome;
    }
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_USER: (state, user) => {
      state.user = user;
    },
    SET_NOME: (state, nome) => {
      state.nome = nome;
    },
    RESET: state => {
      Object.assign(state, getDefaultState());
    }
  },
  actions: {
    login: ({ commit, dispatch  }, { token, user, nome }) => {
      commit('SET_TOKEN', token);
      commit('SET_USER', user);
      commit('SET_NOME', nome);
      // set auth header
     // Axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },
    logout: ({ commit }) => {
      commit('RESET', '');
    }
  },
  modules: {
  }
})
