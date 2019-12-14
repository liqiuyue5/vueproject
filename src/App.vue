<template>
  <div>
   <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShowFooter"></FooterGuide>
   </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "./components/FooterGuide/FooterGuide";
  export default {
    // 定义组件
    components:{
      FooterGuide
    }
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
