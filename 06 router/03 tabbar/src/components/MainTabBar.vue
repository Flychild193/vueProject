<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/homepage.jpeg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/homepage_activate.jpeg" alt="">
      <div slot="item-text">homepage</div>
    </tab-bar-item>

    <tab-bar-item path="/category" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/category.jpeg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/category_activate.jpeg" alt="">h
      <div slot="item-text">category</div>
    </tab-bar-item>

    <tab-bar-item path="/cart" activeColor="red">
      <img slot="item-icon" src="../assets/img/tabbar/cart.jpeg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/cart_activate.jpeg" alt="">
      <div slot="item-text">cart</div>
    </tab-bar-item>

    <tab-bar-item path="/profile" activeColor="red">
      <img slot="item-icon" src="../assets/img/tabbar/profile.jpeg" alt="">
      <img slot="item-icon-active" src="../assets/img/tabbar/profile_activate.jpeg" alt="">
      <div slot="item-text">profile</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/tabbar/TabBar'
import TabBarItem from 'components/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>
<style scoped>
</style>
