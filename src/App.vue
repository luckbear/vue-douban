<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 14px;
  max-width: 42rem;
  margin: 0 auto;
  padding: 5rem 1.8rem 0;
}
html {
  font-size: 62.5%; //默认16px的62.5%=10px
  body {
    margin: 0;
    padding: 0;
  }
}

h2 {
  font-size: 1.6rem;
  font-weight: normal;
  color: #111;
}
ul,
li,
a,
h2 {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
a {
  text-decoration: none;
}
</style>
