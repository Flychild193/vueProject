import axios from 'axios'

export function request_me(config, success, failure){
  // 1. 創建axios實例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout:2000
  })

  //3. 發送真正的網路請求
instance(config)
  .then(res=>{
    success(res);
  })
  .catch(err => {
    failure(err)
  })
}
