<template>
  <div class="types">
    <h2>分类浏览</h2>
    <div class="content">
      <ul class="type-list">
        <li v-for="(item,i) in items" :key="i">
          <a :href="baseUri + item.href">
            {{item.title}}
            <span>></span>
          </a>
        </li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "types",
  data() {
    return {
      baseUri: "https://m.douban.com/",
      items: [
        {
          title: "经典",
          href: "movie/classic"
        },
        {
          title: "冷门佳片",
          href: "movie/underrated"
        },
        {
          title: "豆瓣高分",
          href: "movie/doubantop"
        },
        {
          title: "动作",
          href: "movie/action"
        },
        {
          title: "喜剧",
          href: "movie/comedy"
        },
        {
          title: "爱情",
          href: "movie/love"
        },
        {
          title: "悬疑",
          href: "movie/mystery"
        },
        {
          title: "恐怖",
          href: "movie/horror"
        },
        {
          title: "科幻",
          href: "movie/scifi"
        },
        {
          title: "治愈",
          href: "movie/sweet"
        },
        {
          title: "文艺",
          href: "movie/artfilm"
        },
        {
          title: "成长",
          href: "movie/youth"
        },
        {
          title: "动画",
          href: "movie/animation"
        },
        {
          title: "华语",
          href: "movie/chinese"
        },
        {
          title: "欧美",
          href: "movie/western"
        },
        {
          title: "韩国",
          href: "movie/korean"
        },
        {
          title: "日本",
          href: "movie/japanese"
        }
      ]
    };
  }
};
</script>


<style lang="less" scoped>
.types {
  h2 {
    margin-bottom: 1rem;
  }
  ul {
    &:after {
      clear: both;
      content: ".";
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
    }
  }
  li {
    box-sizing: border-box;
    float: left;
    width: 49%;
    height: 4rem;
    line-height: 4rem;
    border-bottom: 1px solid #eee;
    &:nth-child(even) {
      border-left: 1px solid #eee;
      padding-left: 1.5rem;
    }
    &:first-child,
    &:nth-child(2) {
      border-top: 1px solid #eee;
    }
    span {
      float: right;
      color: #ccc;
      margin-right: 2rem;
    }
  }
}
</style>