import {INCREMENT} from "./mutations-types";

export default {


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
    incrementCount(state, payload) {
      state.counter += payload.count
    },

    addStudent(state, stu) {
      state.students.push(stu)
    },
    updateInfo(state) {
      state.info.name = 'Oneal'

      //錯誤代碼：不能在進行mutation異步操作
      //setTimeout(()=>{
      // state.info.name = 'lbji'
      //},1000)

      // Vue.set(state.info, 'address', 'LA')
      // Vue.delete(state.info, 'age')
    }
  }


