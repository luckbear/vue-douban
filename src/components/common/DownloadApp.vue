<template>
    <div class="download">
        <div class="logo">
            <img src="../../assets/images/douban-app-logo.png" alt="下载豆瓣App">
            <div class="brand">
                <span>豆瓣</span>
            </div>
        </div>
        <a href="">免费下载Android客户端</a>

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
  padding-bottom: 2rem;
  margin: 5rem 0 3rem;
  .logo {
    display: inline-block;
    margin: 0 auto 1.5rem;
    img {
      width: 4.8rem;
      float: left;
      margin-right: 1.2rem;
    }
    .brand {
        display: inline-block;
      span {
        font-size: 2.4rem;
        line-height: 4.8rem;
      }
    }
  }
  a{
      display: block;
      color: #42bd56;
      font-size: 15px;
  }
}
</style>