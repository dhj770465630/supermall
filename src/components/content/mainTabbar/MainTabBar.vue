<template>
  <tab-bar>
     <tab-baritem path="/home">
       <img slot="item-icon" src="@/assets/images/profile/home.svg" alt="">
       <img slot="item-icon-active" src="@/assets/images/tabbar/home_active.svg" alt="">
       <p slot="item-text">首页</p>
     </tab-baritem>
     <tab-baritem path="/category">
       <img slot="item-icon" src="@/assets/images/tabbar/category.svg" alt="">
       <img slot="item-icon-active" src="@/assets/images/tabbar/category_active.svg" alt="">
       <p slot="item-text">分类</p>
     </tab-baritem>
     <tab-baritem path="/cart">
       <img slot="item-icon" src="@/assets/images/tabbar/shopcart.svg" alt="">
       <img slot="item-icon-active" src="@/assets/images/tabbar/shopcart_active.svg" alt="">
       <p slot="item-text">购物车</p>
     </tab-baritem>
     <tab-baritem path="/profile">
       <img slot="item-icon" src="@/assets/images/tabbar/profile.svg" alt="">
       <img slot="item-icon-active" src="@/assets/images/tabbar/profile_active.svg" alt="">
       <p slot="item-text">我的</p>
     </tab-baritem>
   </tab-bar>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar"
import TabBaritem from "../../common/tabbar/TabBaritem"
export default {
  name: 'MainTabBar',
  components:{
    TabBar,
    TabBaritem
  }
}
</script>