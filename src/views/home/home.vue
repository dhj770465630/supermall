<template>
<div id="home">
 <nav-bar class="home-nav"><div slot="center">购物车</div></nav-bar>
 <home-swiper :banners="banners"></home-swiper>
 <hometjlist :recommends="recommends" />
  <tab-control class="tab-control" :titles="['流行','新款','精选']" />

  <goods-list :goods="goods['pop'].list" />
    <!-- <van-swipe-item>2</van-swipe-item> -->
  
</div>
</template>

<script>
import HomeSwiper from './ChildComps/HomeSwiper'
import Hometjlist from './ChildComps/Hometjlist'

import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '../../components/content/TabControl/TabControl'
import GoodsList from '@/components/content/goods/GoodsList'

import {getHomes , getHomeGoods} from '@/network/home'


export default {
  name:'home',
  components:{
    HomeSwiper,
    Hometjlist,
    NavBar,
    TabControl,
    GoodsList

  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
      }
    }
  },
  created(){
    //请求多个数据
   this.getHomes()

  //  首页选项卡数据
   this.getHomeGoods('pop')
   this.getHomeGoods('new')
   this.getHomeGoods('sell')
   
  },
  methods:{
    getHomes(){
       getHomes().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      const page = this.goods[type].page + 1
       getHomeGoods(type, page).then(res =>{
        console.log(res);
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  }
}
</script>
<style>
.home-nav{background-color: var(--color-tint);color: #fff;}
.van-swipe-item{margin-top: 45px;}
.van-swipe-item img{display: block;width:100%;}
.tab-control{position: sticky;top:45px;z-index: 99;}
</style>