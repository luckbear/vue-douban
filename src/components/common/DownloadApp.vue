<template>
    <div class="download">
        <div class="logo">
            <img src="../../assets/images/douban-app-logo.png" alt="下载豆瓣App">
            <div class="brand">
                <sapn>豆瓣</sapn>
            </div>

        </div>

    </div>
</template>

<script>
export default {
  components: {}
};
</script>


<style lang="less" scoped>
.download {
  text-align: center;
  .logo {
    margin: 8rem auto 1.5rem;
    display: inline-block;
    img {
      width: 5rem;
    }
    .brand {
      display: inline-block;
      sapn {
        font-size: 2.5rem;
        margin-left: 1rem;
      }
    }
  }
}
</style>