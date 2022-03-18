<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/homepage.jpeg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/homepage_activate.jpeg" alt="">
        <div slot="item-text">homepage</div>
      </tab-bar-item>

      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/category.jpeg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/category_activate.jpeg" alt="">
        <div slot="item-text">category</div>
      </tab-bar-item>

      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/cart.jpeg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/cart_activate.jpeg" alt="">
        <div slot="item-text">cart</div>
      </tab-bar-item>

      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/profile.jpeg" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_activate.jpeg" alt="">
        <div slot="item-text">profile</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'

export default {
  name: 'App',
  components: {
    TabBarItem,
    TabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
