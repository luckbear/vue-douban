<template>
    <div class="movie">
        <Card :movies="movies"/>
    </div>
</template>

<script>
import { mapState } from "vuex";
import Card from "../common/MovieCard";

export default {
  components: {
    Card
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