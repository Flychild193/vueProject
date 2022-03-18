<template>
  <tab-bar>
    <tab-bar-item path="/finance" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/finance.jpeg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/finance_activate.jpeg" alt="">
      <div slot="item-text">finance</div>
    </tab-bar-item>

    <tab-bar-item path="/me" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/me.jpeg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/me_activate.jpeg" alt="">
      <div slot="item-text">me</div>
    </tab-bar-item>

    <tab-bar-item path="/wallet" activeColor="red">
      <img slot="item-icon" src="~assets/img/tabbar/wallet.jpeg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/wallet_activate.jpeg" alt="">
      <div slot="item-text">wallet</div>
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
