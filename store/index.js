import querystring from 'querystring';

const baseAPI = 'http://localhost:8000/';

export const state = () => ({
  user: null,
  token: null,
})

export const getters = {
  loggedIn: state => state.token ? true : false,
}

export const mutations = {
  setUser: function(state, data) {
    state.user = data;
  },

  resetUser: function(state) {
    state.user = null;
  },

  setToken: function(state, data) {
    state.token = data;
  },

  resetToken: function(state) {
    state.token = null;
  },
}

export const actions = {
  async login({ commit, state, rootState }, formData) {
    const url = `${baseAPI}token`;
    const config = {
      method: 'post',
      url,
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      data: `grant_type=&username=${formData['email']}&password=${formData['password']}&scope=&client_id=&client_secret=`
    }
    try {
      const { data } = await this.$axios(config);
      commit('setToken', data.access_token);
      return data
    } catch (error) {
      console.log(error.message || error.stack);
      return error.message || error.stack
    }

  },

  async logout({ commit, state }) {
    commit('resetToken');
    console.log('logout done', state.token);
    return true;
  },
}
