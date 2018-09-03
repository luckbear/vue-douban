<template>
  <div class="detail">
    <div class="appDownload">
      <img src="../../assets/images/promotion_bg.jpg" alt="">
      <div class="slogan">
        <span>用App打开</span>
        <br>
        <span>每天看点好内容</span>
      </div>

      <div class="app">
        <a href="#" class="download">极速下载</a>
        <a href="#" class="open">打开</a>
      </div>
    </div>

    <div class="event" v-if="!isLoading">
      <h3>{{event.title}}
        <span>{{event.loc_name}}</span>
      </h3>
      <div class="eventImg"><img :src="event.image_hlarge" alt=""></div>

      <p>开始时间：
        <span>{{event.begin_time}}</span>
      </p>
      <p>结束时间：
        <span>{{event.end_time}}</span>
      </p>
      <p>票价：
        <span>{{event.fee_str}}</span>
      </p>
      <p>地点：
        <span>{{event.address}}</span>
      </p>

      <!-- 地图组件 -->
      <Map :geo="event.geo" />

      <div class="eventContent" v-html="event.content">

      </div>
    </div>

    <Loading v-if="isLoading" />
  </div>
</template>

<script>
import Map from "../common/Map";
import Loading from "../common/Loading";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Map,
    Loading
  },
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapState({ event: state => state.activity.eventDetail })
  },
  watch: {},
  created() {
    this.$store.dispatch("getEventDetail", this.$route.params.id).then(res => {
      //异步数据请求完成后
      this.isLoading = false;
    });
  }
};
</script>


<style lang="less" scoped>
.appDownload {
  position: relative;
  z-index: -10;
  img {
    width: 100%;
  }
  .slogan {
    position: absolute;
    left: 1rem;
    top: 50%;
    margin-top: -2rem;
    color: #2ca532;
  }
  .app {
    position: absolute;
    right: 1rem;
    top: 50%;
    margin-top: -1rem;
    .download {
      color: #fff;
      background-color: #42bd56;
      border-radius: 3px;
      padding: 6px 8px;
    }
    .open {
      color: #42bd56;
      border: 1px solid #42bd56;
      border-radius: 3px;
      padding: 6px 14px;
      margin-left: 1rem;
    }
  }
}

.event {
  p {
    font-weight: bold;
    margin: 1rem 0;
    span {
      font-weight: normal;
    }
  }
  h3 {
    line-height: 1.5;
    span {
      color: #fff;
      font-weight: normal;
      background-color: #42bd56;
      border-radius: 3px;
      padding: 2px 4px;
    }
  }
  .eventImg {
    text-align-last: center;
    img {
      width: 100%;
    }
  }
  .eventContent {
    margin-top: 2rem;
  }
}
</style>