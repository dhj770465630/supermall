<template>
<div id="home">
 <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
 <home-swiper :banners="banners"></home-swiper>
 <hometjlist :recommends="recommends" />


    <!-- <van-swipe-item>2</van-swipe-item> -->
</div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'
import HomeSwiper from './ChildComps/HomeSwiper'
import Hometjlist from './ChildComps/Hometjlist'

import {getHomes} from '@/network/home'


export default {
  name:'home',
  components:{
    NavBar,
    HomeSwiper,
    Hometjlist

  },
  data() {
    return {
      banners: [],
      recommends: []
    }
  },
  created(){
    //请求多个数据
    getHomes().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  }
}
</script>
<style>
.home-nav{background-color: var(--color-tint);color: #fff;}
.van-swipe-item img{display: block;width:100%;}
</style>