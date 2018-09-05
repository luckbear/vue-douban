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
      onlyStr: "发现好图书"
    };
  },
  computed: {
    ...mapState({
      movies: state => state.book.movies,
      movieTags: state => state.book.movieTags
    })
  },
  created() {
    this.$store.dispatch("getBook");
  }
};
</script>


<style lang="less" scoped>
</style>