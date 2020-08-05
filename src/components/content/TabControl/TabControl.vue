<template>
  <div class="qh-home">
    <div v-for="(item , index) in titles" 
      :key="index" class="qh-listf" 
      :class="{active: index === dqindex}"
      @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      dqindex: 0
    }
  },
  methods:{
    itemclick(index){
      this.dqindex = index
    }
  }
}
</script>

<style>
  .qh-home{width: 100%;display: flex;line-height: 40px;background: #fff;}
  .qh-home div{flex: 1;text-align: center;}
  .active{color: #ff8198;}
  .active span{border-bottom: 2px solid #ff8198;padding:0 5px 5px;}
</style>