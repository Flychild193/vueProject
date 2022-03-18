<template>
<div>
  <p>Me</p>
  <h1>{{message_content}}</h1>
  <button @click="gethostdata">获取数据</button>
  <button @click="datarefresh">refresh</button>
  <button @click="clear">clear</button>
</div>

</template>

<script>
//5. 封裝request模塊
import {request_me} from "../../network/request_me.js";


export default {
  name: 'Me',
  data(){
    return {
      message_content: null,
      t:""
    }
  },
  methods:{
    gethostdata(){
      request_me({url:'/home/multidata'}
      ,res => {
        // console.log('gethostdata'); 
        // console.log(res.data.data);  //这里是sucess
        this.message_content = res.data.data.banner.context;
      },err => {
        // console.log(res);   //这里是failure
      })
      },

    datarefresh() {
        // console.log('datarefresh');
        var _this = this
        _this.t = setInterval(()=>{this.gethostdata()},2000)   //网路方法，这里测用this _this都行
    
    },

    clear() {
      // console.log('clear datarefresh with!');
      clearInterval(this.t);
    
    }
  },
  created(){
    console.log('created@me vue');
    this.gethostdata();
    this.datarefresh();
    },
  destroyed(){
        console.log('me vue destoryed')
        // 在页面销毁后，清除计时器
        this.clear()
    },
}
</script>

<style scoped>

</style>



// homeClick() {
    //   this.$router.push('/home')
    //   console.log('homeClick');
    // },
    // aboutClick() {
    //   //  this.$router.push('about')
    //   this.$router.replace('/about');
    //   console.log('aboutClick');
    // },
    // userClick(){
    //   this.$router.push('/user'+this.userId)
    // },
    // profileClick(){
    //   this.$router.push({
    //     path: '/profile',
    //     query:{
    //       name:'kobe',
    //       age:20,
    //       height:188
    //     }
    //   })
    // }
//   }
// }