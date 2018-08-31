<template>
  <div class="map">
    <div id="mapContainer">
    </div>
  </div>
</template>

<script>
export default {
  props: ["geo"],
  computed: {
    poi() {
      return this.geo.split(" ");
    }
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      //创建地图
      let mapObj = new AMap.Map("mapContainer", {
        resizeEnable: true,
        center: [this.poi],
        zoom: 13
      });
      //创建点
      let marker = new AMap.Marker({
        position: [this.poi]
      });
      //把点添加到地图
      mapObj.add(marker);
    }
  }
};
</script>


<style lang="less" scoped>
#mapContainer {
  width: 100%;
  height: 20rem;
}
</style>