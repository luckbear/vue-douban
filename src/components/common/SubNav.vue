<template>
    <div class="subNav">
        <!-- 底部导航栏 -->
        <div class="bottomNav" v-if="isNav === 'bottomNav'">
                <ul class="nav">
                    <li>
                        <template>
                            <router-link to="/login">注册账号</router-link>
                        </template>
                        <template>
                            <router-link to="/login">name</router-link>
                        </template>
                    </li>
                    <li>
                        <template>
                            <router-link to="/login">登陆豆瓣</router-link>
                        </template>
                        <template>
                            <a href="#">退出豆瓣</a>
                        </template>
                    </li>
                    <li><a href="">使用桌面版</a></li>
                    <li><a href="">使用豆瓣App</a></li>
                </ul>
        
        </div>

        <!-- 主页导航栏 -->
        <div class="topNav" v-if="isNav==='topNav'">
            <ul class="nav">
                <li><router-link to="movie">影院热映</router-link></li>
                <li><router-link to="">欧美新碟榜</router-link></li>
                <li><router-link to="">注册帐号</router-link></li>
                <li>
                    <!-- <template>
                        <a href="#">退出登录</a>
                    </template> -->
                    <template>
                        <router-link to="/login">登陆豆瓣</router-link>
                    </template>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {
  components: {},
  props: {
    isNav: {
      type: String,
      default: "topNav"
    }
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  methods: {}
};
</script>


<style lang="less" scoped>
.bottomNav {
  .nav {
    margin: 1rem 0 0 0;
    display: flex;
    flex-wrap: wrap;
    li {
      box-sizing: border-box;
      border-bottom: 0.1rem solid #f3f3f3;
      width: 50%;
      text-align-last: center;
      padding: 1.2rem 0;
      &:nth-child(1) a,
      &:nth-child(3) a {
        border-right: 0.1rem solid #e5e5e5;
      }
      a {
        color: #42bd56;
        display: block;
      }
    }
  }
}

.topNav {
  .nav {
    margin: 1rem 0 0 0;
    display: flex;
    flex-wrap: wrap;
    li {
      box-sizing: border-box;
      padding: 0.3rem;
      width: 50%;
      flex: none;
      a {
        display: block;
        background-color: #f6f6f6;
        color: #494949;
        border-radius: 0.2rem;
        text-align-last: center;
        padding: 1.2rem 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
  }
}
</style>