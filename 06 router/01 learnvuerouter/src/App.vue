<template>
  <div id="app">
    <h2>i am app component</h2>
<!--    <router-link to="/home" tag="button" replace active-class="active">homepage</router-link>-->
<!--    <router-link to="/about" replace active-class="active">about</router-link>-->
<!--    <router-link to="/home" tag="button" replace>homepage</router-link>-->
<!--    <router-link to="/about" replace>about</router-link>-->
<!--    <button @click="homeClick">homepage</button>-->
<!--    <button @click="aboutClick">about</button>-->
        <router-link to="/home" >homepage</router-link>
        <router-link to="/about" >about</router-link>
        <router-link v-bind:to="/user/+userId" >user</router-link>
<!--    <router-link to="/profile" replace>profile</router-link>-->
<!--        <router-link :to="{path:'/profile',query:{name:'why',age:18,height:188}}" >profile</router-link>-->
        <button @click="userClick">user</button>
        <button @click="profileClick">profile</button>

        <keep-alive exclude="Profile">
          <router-view/>
        </keep-alive>


  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      userId: "handsome"
    }
  },
  methods:{
    homeClick() {
    this.$router.push('/home')
    console.log('homeClick');
},
    aboutClick() {
  //  this.$router.push('about')
      this.$router.replace('/about');
      console.log('aboutClick');
    },
    userClick(){
      this.$router.push('/user'+this.userId)
    },
    profileClick(){
      this.$router.push({
        path: '/profile',
        query:{
          name:'kobe',
          age:20,
          height:188
        }
      })
    }
}}
</script>

<style>
 /*.route_link-active{*/
 /*  color: red,*/
 /*}*/


 .active {
   color: red
 }
</style>
