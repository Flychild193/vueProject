import Vue from 'vue'
import App from './App'
import axios from 'axios'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
// 1. axios的基本使用
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method: 'get'
// }).then(res => {
//   console.log(res) ;
// })
//
// axios({
//   url:'http://123.207.32.32:8000/home/data',
//   //專門針對get請求的參數拼接
//   params:{
//     type:'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res) ;
// })

// 2. axios發送併發請求
// axios.all([axios({
//   url:'http://123.207.32.32:8000/home/multidata'
// }),axios({
//   url:'http://123.207.32.32:8000/home/data',
//   params:{
//     type: 'sell',
//     page: 5
//   }
// })])
//   .then(results => {
//     console.log(results);
//     console.log(results[0]);
//     console.log(results[1]);
//   })

// axios.all([axios({
//   baseURL:'http://123.207.32.32:8000',
//   timeout: 5,
//   url:'/home/multidata'
// }),axios({
//   baseURL:'http://123.207.32.32:8000',
//   timeout: 5,
//   url:'/home/data',
//   params:{
//     type: 'sell',
//     page: 5
//   }
// })])
//   .then(axios.spread((res1, res2) =>{
//       console.log(res1);
//       console.log(res2);
//     })
//   )

// 3. 使用全局的axios和對應的配置在進行網路請求
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// axios.all([axios({
//   url:'/home/multidata'
// }),axios({
//   url:'/home/data',
//   params:{
//     type: 'sell',
//     page: 5
//   }
// })])
//   .then(axios.spread((res1, res2) =>{
//     console.log(res1);
//     console.log(res2);
//   })
//   )

// 4.創建對應的axios的實例
// const instance1 = axios.create({
//   baseURL : 'http://123.207.32.32:8000',
//   timeout: 5000
// })
//
// instance1({
//   url:'/home/multidata'
// }).then(res =>{
//   console.log(res);
// })
//
// instance1({
//   url:'/home/data',
//   params:'pop',
//   page:1
// })
//
// const instance2 = axios.create({
//   baseURL: 'https://111.222.333.444:8000',
//   timeout: 10000,
// })

//5. 封裝request模塊
import {request} from "./network/request";

// request({
//   baseConfig: {
//
//   },
//   success: function (res){
//
//   },
//   failure: function (err){
//
//   }
// })

// request({
//   url:'/home/multidata'
// },  res=>{
//   console.log(res);
//   // success(res);
// }, err =>{
//     console.log(err);
//     // failure(err)
//   })

request({
  url:'/home/multidata'})
  .then(res=>{
    console.log('finished');
     console.log('url');
    console.log(res);})
  .catch(err=>{console.log(err);})
