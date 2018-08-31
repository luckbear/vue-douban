<template>
    <div class="home">
        <div class="content">
            <SubNav/>
            <list :events="events"/>
            <InfiniteLoading :on-infinite="onInfinite" ref="infiniteLoding"/>
        </div>
    </div>
</template>

<script>
import SubNav from "../common/SubNav";
import List from "../common/List";
import InfiniteLoading from "vue-infinite-loading";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    SubNav,
    InfiniteLoading,
    List,
    Map
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({ events: state => state.activity.events })
  },
  watch: {},
  created() {},
  methods: {
    onInfinite() {
      setTimeout(() => {
        this.loadMore();
        this.$refs.infiniteLoding.$emit('$InfiniteLoading:loaded');
      }, 1000);
    },
    ...mapActions(["loadMore"])
  }
};
</script>


<style lang="less" scoped>
</style>
