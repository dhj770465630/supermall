<template>
  <div class="home-tjl">
    <ul>
      <li v-for="item in recommends">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p>{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hometjlist',
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style>
  .home-tjl{width:100%;padding: 15px 0;}
  .home-tjl ul{width:100%;display: flex;}
  .home-tjl ul li{text-align: center;flex: 1;}
  .home-tjl ul li img{display: inline-block;max-width: 80%;}
  .home-tjl ul li p{color: #333;margin: 0;margin-top:5px;}
</style>