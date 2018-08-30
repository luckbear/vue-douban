<template>
    <div class="home">
        <div class="content">
            <SubNav/>
        </div>
    </div>
</template>

<script>
import SubNav from "../common/SubNav";
import { mapState} from "vuex";
export default {
  components: {
    SubNav
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({ events: state => state.activity.events })
  },
  watch: {},
  created() {
      this.$store.dispatch('loadMore')
      
  },
  methods: {}
};
</script>


<style lang="less" scoped>
</style>
