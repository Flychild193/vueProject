<template>
  <div>
  <h2>Finance is here</h2>
  <button @click="gethostdata">获取數據庫數據</button>
  <p>{{message_content}}</p>
  </div>
</template>

<script>
//5. 封裝request模塊
import {request_finance} from "../../network/request_finance.js";

export default {
  name: "Finance",
  data(){
    return {
      message_content: null,
      t:""
    }
  },
  methods:{
    gethostdata(){
            request_finance({
              url:'/matrix/equityvalue/',
              }
            ,res => {
              console.log('gethostdata_okxtime'); 
              this.message_content = res.data.retlist.timestamp
              // console.log(res)  //这里是sucess
            
            },err => {
              console.log(res);   //这里是failure
            })
            },
    datarefresh() {
        // console.log('datarefresh');
        var _this = this
        _this.t = setInterval(()=>{this.gethostdata()},61000)   //网路方法，这里测用this _this都行
        },
    clear() {
      // console.log('clear datarefresh with!');
      clearInterval(this.t);  
    },
  },

  created(){
        console.log('created@finance vue');
        this.gethostdata();
        this.datarefresh();
    },
  destroyed(){
         console.log('finnance vue destoryed')
        // 在页面销毁后，清除计时器
        this.clear()
    },
  
}
</script>

<style scoped>

</style>
