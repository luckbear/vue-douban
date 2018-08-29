<template>
    <div class="pagesView">
        <HeaderBar/>
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderBar from "../common/Header";
export default {
  components: {
    HeaderBar
  }
};
</script>


<style lang="less" scoped>
</style>
