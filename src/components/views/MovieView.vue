<template>
  <div class="movie">
    <Card :movies="movies" :movieTags="movieTags" :onlyStr="onlyStr" />

    <Types/>

    <DownloadApp/>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Types from "../common/Types";
import Card from "../common/MovieCard";
import DownloadApp from "../common/DownloadApp";

export default {
  components: {
    Card,
    Types,
    DownloadApp
  },
  data() {
    return {
      onlyStr: "发现好电影"
    };
  },
  computed: {
    ...mapState({
      movies: state => state.movie.movies,
      movieTags: state => state.movie.movieTags
    })
  },
  created() {
    this.$store.dispatch("getMovie");
  }
};
</script>


<style lang="less" scoped>
</style>