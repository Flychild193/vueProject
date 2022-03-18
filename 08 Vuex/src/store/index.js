import Vue from "vue"
import Vuex from 'vuex'

import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import moduleA from './modules/moduleA'

//1. 安裝插件
Vue.use(Vuex)

//2. 創建對象
const state ={
  counter:1000,
  students:[
    {id:110, name:'kobe', age:18},
    {id:111, name:'lbj', age:30},
    {id:112, name:'kd', age:25},
    {id:113, name:'curry', age:13},
    {id:114, name:'ki', age:22},
  ],
  info:{
    name:'KG',
    age:45,
    height:200
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,

  modules:{
    a: moduleA
  }
})

//3. 導出store獨享
export default store



