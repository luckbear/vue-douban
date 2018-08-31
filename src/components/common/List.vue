<template>
    <div class="list">
        <div v-for="(event,index) in events" :key="index">
            <router-link :to="'detail'+event.id">
                <div class="content">
                    <div class="topic">
                        <h3>{{event.title}}</h3>
                        <p v-html="event.content"> </p>
                    </div>
                    <img :src="event.image_lmobile" alt="">
                </div>

                <div class="tag">
                    <span>{{event.category_name}}</span>
                </div>
            </router-link>
        </div>

    </div>
</template>

<script>
export default {
  components: {},
  props:{
      events:{
          type:Array
      }
  }
};
</script>


<style lang="less" scoped>
.list {
  margin-top: 1rem;
  border-bottom: 1px solid rgb(226, 226, 226);
  .content {
    height: 115px;
    display: flex;
    .topic {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      h3 {
        color: #494949;
        font-size: 17px;
        font-weight: normal;
        margin: 0 0 6px;
      }
      p {
        font-size: 12px;
        color: #aaa;
        text-align: justify;
        line-height: 1.5;
      }
    }
    img {
      float: right;
      width: 25%;
      height: 100%;
      margin-left: 1.5rem;
    }
  }
  .tag {
    font-size: 12px;
    color: #ccc;
    margin: 1rem 0;
  }
}
</style>