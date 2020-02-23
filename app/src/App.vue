<template>
  <div id="app">
    <div style="min-height:400px;">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    },
    watch:{
      selected(a,b){
        console.log(a);
      }
    }
  }
</script>

<style>
  [v-cloak]{display: none;}
</style>