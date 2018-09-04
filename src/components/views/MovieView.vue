<template>
    <div class="movie">
        <Card :movies="movies"/>

        <Types/>

        <DownloadApp/>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Types from '../common/Types'
import Card from "../common/MovieCard";
import DownloadApp from '../common/DownloadApp'

export default {
  components: {
    Card,
    Types,
    DownloadApp
  },
  computed: {
    ...mapState({
      movies: state => state.movie.movies,
    })
  },
  created() {
      this.$store.dispatch('getMovie')
  },
};
</script>


<style lang="less" scoped>
</style>