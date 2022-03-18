<template>
  <div>
    <h2>i am homepage</h2>
    <p>i am home content</p>

    <router-link to="/home/news">News</router-link>
    <router-link to="/home/message">Message</router-link>

    <router-view></router-view>

    <h2>{{message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      message:'hello',
      path: '/home/news'
    }
  },
  created(){
    console.log('created');
    document.title='homepage'
  },
  destroyed(){
    console.log('destroyed');
  },
  mounted(){
    console.log('mounted');
  },
  updated(){
    console.log('updated');
  },
  activated(){
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from ,next){
    console.log(this.$route.path);
    this.path=this.$route.path;
    next()
  }
}
</script>

<style scoped>

</style>
