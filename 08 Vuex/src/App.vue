<template>
  <div id="app">
    <h2>----- APP content: modules content ----</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">name change</button>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <button @click="asyncUpdateName">async name change</button>

    <h2>----- APP info object 是否是響應式 ----</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">info change</button>

    <h2>----- APP content ----</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">addStudent</button>

    <h2>----- APP content: getters info  ----</h2>
    <h2>{{$store.getters.powerCounter}}</h2>
<!--    <h2>{{more20stu}}</h2>-->
    <h2>{{$store.getters.more20stu}}</h2>
<!--    <h2>{{$store.getters.more20stu.length}}</h2>-->
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(12)}}</h2>

    <h2>----- component content ----</h2>
    <hello-vuex></hello-vuex>
    <hello-vuex/>
  </div>
</template>

<script>
  import HelloVuex from "./components/HelloVuex";
  import {INCREMENT} from './store/mutations-types'

  export default {
    name: 'App',
    components:{
      HelloVuex
    },
    data() {
      return {
        message: 'i am app component'
      }
    },
    // computed:{
    //   more20stu(){
    //     // return this.$store.state.students.filter(s => {
    //     //   return s.age >=21
    //       return this.$store.state.students.filter(s => s.age >= 22)
    //   }
    // },
    methods: {
      addition() {
        this.$store.commit(INCREMENT)
      },
      subtraction(){
        this.$store.commit('decrement')
      },
      addCount(count){
        //  payload: 負載
        // 1.普通的提交封裝
        // this.$store.commit('incrementCount',count)
        // 2. 特殊的提交封裝
        this.$store.commit({
          type: 'incrementCount',
          count,
        })},
      updateInfo(){
          // this.$store.commit('updateInfo')
          // this.$store.dispatch('aUpdateInfo', {
          //   message: 'i am info in payload',
          //   success: () => {
          //     console.log('it is finished')
          //   }
          // })
          this.$store
            .dispatch('aUpdateInfo','i am info in payload')
          .then(res => {
            console.log('hand in over');
            console.log(res);
          })
        },
      addStudent(){
        const stu = {id:115, name:'AI', age:37}
        this.$store.commit('addStudent',stu)
      },
      updateName(){
        this.$store.commit('updateName','parker')
      },
      asyncUpdateName(){
        this.$store.dispatch('aUpdateName')
      }
    }
  }
</script>

<style>

</style>
