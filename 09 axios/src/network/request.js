import axios from 'axios'

export function request(config){
    // 1. 創建axios實例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout:5000
    })
  //2. axios的攔截器
    instance.interceptors.request.use(config =>{
      console.log(config);
      //2.1 請求攔截的作用
      // 1.  假如config中的訊息不符合服務器要求
      // 2  假如每次發送網路請求時，在介面顯示請求圖標
      // 3.  某些網絡請求（比如登入(token))，必須攜帶一些特殊信息
      return config
    },err => {
      console.log(err);
    })
  //2.2 響應攔截的作用
    instance.interceptors.response.use(res=>{
      console.log(res);
    },err =>{
      console.log(err);
    });

  //3. 發送真正的網路請求
 return instance(config)
}

// export function request(config){
//   return new Promise((resolve, reject) => {
//     // 1. 創建axios實例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout:5000
//   })
//
//   // 發送真正的網路請求
//   instance(config)
//     .then(res => {
//     resolve(res)
//     })
//     .catch(err =>{
//       reject(err)
//     })
//   })
// }

// export function request(config){
//   // 1. 創建axios實例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout:5000
//   })
//
//   // 發送真正的網路請求
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res)
//     })
//     .catch(err =>{
//       // console.log(err);
//       config.failure(err)
//     })
// }

// export function request(config, success, failure){
//   // 1. 創建axios實例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout:5000
//   })
//
//    // 發送真正的網路請求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res)
//     })
//     .catch(err =>{
//       // console.log(err);
//       failure(err)
//     })}

