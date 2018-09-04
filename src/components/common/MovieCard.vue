<template>
    <div class="card">
        <section v-for="(item,index) in movies" :key=index>
            <header>
                <h2>{{item.title}}</h2>
                <a href="#">更多</a>
            </header>

            <ul>
                <li v-for="(movie,index) in item.movie" :key=index>
                    <router-link to="" >
                        <div class="poster"><img :src="movie.images.large"></div>
                        <span>{{movie.title}}</span>
                        <!-- 评分组件 -->
                        <Rating :rating="movie.rating" />
                    </router-link>
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
  props:['movies']
};
</script>


<style lang="less" scoped>
.card {
  section{
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
  ul {
    margin-top: 1rem;
    white-space: nowrap;
    text-align: center;
    overflow-x: auto;
    &::-webkit-scrollbar { display: none };  //去除横向滚动条
    li {
      display: inline-block;
      width: 10rem;
      margin-right: 1rem;
      &:last-child {
        margin-right: 0;
      }
      img {
        width: 100%;
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
}
</style>