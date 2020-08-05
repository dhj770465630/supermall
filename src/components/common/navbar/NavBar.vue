<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name:'NavBar'
}
</script>
<style scoped>
 .nav-bar{display: flex;line-height:45px;height:45px;overflow: hidden;position: fixed;top: 0;z-index: 99;width:100%;}
 .left{width:60px;}
 .right{width:60px;}
 .center{flex: 1;text-align: center;}
</style>