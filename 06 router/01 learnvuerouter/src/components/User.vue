<template>
  <div>
    <h2>i am user page</h2>
    <p>user info</p>
    <h2>{{userId}}</h2>
    <button @click="btnClick">button</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed:{
    userId(){
      return this.$route.params.userId
    }
  },
  methods:{
    btnClick(){
      console.log(this.$router);
    }
  },
//   created(){
//     console.log('created');
//     document.title='user'
// }
}
</script>

<style scoped>

</style>
