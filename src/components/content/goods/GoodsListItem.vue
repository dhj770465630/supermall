<template>
<div>
  <img :src="goodsItem.show.img" alt="">
  <div>
    <p>{{goodsItem.title}}</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props:{
    goodsItem:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>