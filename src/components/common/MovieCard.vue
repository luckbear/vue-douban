<template>
    <div class="card">
        <section v-for="(item,index) in movies" :key=index>
            <header>
                <h2>{{item.title}}</h2>
                <a href="#">更多</a>
            </header>

            <ul class="hasImg">
                <li v-for="(movie,index) in item.movie" :key=index>
                    <router-link to="">
                        <div class="poster"><img :src="movie.images.large"></div>
                        <span>{{movie.title}}</span>
                        <!-- 评分组件 -->
                        <Rating :rating="movie.rating" />
                    </router-link>
                </li>
            </ul>
        </section>

        <section>
            <header>
                <h2>{{onlyStr}}</h2>
                <a href="#">更多</a>
            </header>

            <ul class="onlyStr">
                <li v-for="(tag,i) in movieTags" :key="i" :style="{'border-color':tag.color}">
                    <a :href="tag.href" :style="{color:tag.color}" v-if="!tag.line">{{tag.title}}</a>
                </li>
            </ul>
        </section>

    </div>

</template>

<script>
import Rating from "./Rating";
export default {
  components: {
    Rating
  },
  props: ["movies", "movieTags","onlyStr"]
};
</script>


<style lang="less" scoped>
.card {
  section {
    margin-bottom: 2rem;
  }
  header {
    margin-top: 1rem;
    h2 {
      display: inline-block;
    }
    a {
      float: right;
      color: #42bd56;
    }
  }
  .hasImg {
    margin-top: 1rem;
    white-space: nowrap;
    text-align: center;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    } //去除横向滚动条
    li {
      display: inline-block;
      width: 10rem;
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 100%;
        height: 14rem;
      }
      span {
        display: block;
        margin-top: 0.5rem;
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
  .onlyStr {
    white-space: nowrap;
    overflow-x: auto;
    margin-top: 1rem;
    &::-webkit-scrollbar {
      display: none;
    }
    li {
      display: inline-block;
      padding: 1.5rem;
      border: 1px solid;
      border-radius: 0.3rem;
      margin-right: 1rem;
      &:empty {
        display: block;
        width: 100%;
        height: 1rem;
        padding: 0;
        border: 0;
      }
    }
  }
}
</style>