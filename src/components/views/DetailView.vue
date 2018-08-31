<template>
    <div class="detail">
        <Map :geo="event.geo"/>
    </div>
</template>

<script>
import Map from "../common/Map";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Map
  },
  data() {
    return {};
  },
  computed: {
    ...mapState({ event: state => state.activity.eventDetail })
  },
  created() {
    this.$store.dispatch("getEventDetail", this.$route.params.id);
  }
};
</script>


<style lang="less" scoped>
</style>