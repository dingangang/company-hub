import Vue from 'vue'
import Vuex from 'vuex'
import {
  login,
  logout } from '@/api/login'
import { getUserInfo } from '@/api/user'
import { setToken, removeToken } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName: ''
  },
  getters: {
    userName: state => state.userName
  },
  mutations: {
    SET_USERNAME: (state, data) => {
      state.userName = data
    }
  },
  actions: {
    // 登录方法，获取请求头
    login({ commit, state }, userInfo) {
      return new Promise((resolve, reject) => {
        login(userInfo).then(response => {
          const token = response.data.token
          setToken(token)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 退出登录方法
    logout() {
      return new Promise((resolve, reject) => {
        logout().then(response => {
          removeToken()
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    getUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo().then(response => {
          const { info } = response
          commit('SET_USERNAME', info)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
})
