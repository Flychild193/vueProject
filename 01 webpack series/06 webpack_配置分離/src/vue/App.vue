<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button>button</button>
    <h2>{{name}}</h2>
    <cpn></cpn>
  </div>
</template>

<script>

import Cpn from './Cpn.vue'

export default {
  name: "App",
  components:{
    Cpn
  },
    data() {
    return {
      message: 'Hello, world!',
      name: 'homerun'
    }
  },
  methods:{
    btnClick() {}

  }

}
</script>

<style scoped>
  .title{
    color: green;
  }
</style>