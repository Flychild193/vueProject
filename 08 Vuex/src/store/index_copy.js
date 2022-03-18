import Vue from "vue"
import Vuex from 'vuex'

import {
  INCREMENT
} from "./mutations-types";
//1. 安裝插件
Vue.use(Vuex)

//2. 創建對象
const moduleA = {
  state:{
    name: 'tim'
  },
  mutations: {
    updateName(state, payload){
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context){
      setTimeout(()=>{
        context.commit("updateName",'MJ')
        },1000
      )
    }
  },
  getters: {
    fullname(state){
      return state.name + '1111'
    },
    fullname2(state,getters){
      return getters.fullname+'2222'
    },
    fullname3(state,getters,rootState){
      return getters.fullname2+rootState.counter
    }
  }
}

const store = new Vuex.Store({
  state:{
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
  },
  mutations:{
    // 方法
    [INCREMENT](state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // 1. 普通封裝
    // incrementCount(state,count){
    //   state.counter += count
    // },

    // 2. 特殊封裝
    incrementCount(state,payload){
      state.counter += payload.count
    },

    addStudent(state, stu){
      state.students.push(stu)
    },
    updateInfo(state){
      state.info.name='Oneal'

      //錯誤代碼：不能在進行mutation異步操作
      //setTimeout(()=>{
      // state.info.name = 'lbji'
      //},1000)

      // Vue.set(state.info, 'address', 'LA')
      // Vue.delete(state.info, 'age')
    }
  },
  actions:{
    // aUpdateInfo(context, payload){
    //   setTimeout(() => {
    //     context.commit('updateInfo')
    //     console.log(payload.message);
    //     payload.success()
    //   },1000)
    // }
    aUpdateInfo(context, payload){
      return new Promise((resolve, reject)=>{
        setTimeout(() => {
          context.commit('updateInfo');
          console.log(payload);
          resolve('11111')
        },1000)
      })
    }
  },
  getters:{
  powerCounter(state){
    return state.counter * state.counter
  },
    more20stu(state){
    return state.students.filter(s => s.age >20)
    },
    more20stuLength(state, getters){
      return getters.more20stu.length
    },
    moreAgeStu(state){
      // return function(age){
      //   return state.students.filter(s => s.age > age)
      // }
      return age => {
        return state.students.filter(s => s.age > age)
      }
    }
  },
  modules:{
    a: moduleA
  }
})

//3. 導出store獨享
export default store



