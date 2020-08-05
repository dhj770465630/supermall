<template>
   <van-swipe :autoplay="3000">
    <van-swipe-item v-for="item in banners" :key="item.acm">
      <a :href="item.link">
        <img :src="item.image" :alt="item.title">
      </a>
    </van-swipe-item>
  </van-swipe>
</template>

<script>

export default {
  name: 'HomeSwiper',
  props:{
    banners:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
  }
}
</script>