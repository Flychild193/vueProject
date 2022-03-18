//   重启项目
module.exports = {
  //以下配置的效果
  //   “/api/getok.php”  -->   http://122.51.238.153/getok.php
  // 修改的配置
  devServer: {
    proxy: {
      //如果地址以/api开头，它就会请求到 http://122.51.238.153
      '/api': {
          target: 'http://47.242.55.235:8000',
          // secure:true,//协议http配置为false，https协议配置为true
          changeOrigin: true,
          pathRewrite: {
                '^/api': ''   //重写请求路径
        },
      }
    },
  //   headers: {
  //     'Access-Control-Allow-Origin': '*',
  // }
}}
