import axios from 'axios'

export function request_finance(config, success, failure){
  // 1. 創建axios實例
  const instance = axios.create({
    baseURL: '/api',
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
