<template>
  <!-- TYPE1 -->

  <div id="carousel_product" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(item, index) in lists" class="carousel-item" :class="{'active':index==0}">
        <img :src="IMG_URL+item.src" class="d-block w-100" :alt="item.alt" />
      </div>
    </div>
    <a href="#carousel_product" class="carousel-control-prev" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
    </a>
    <a href="#carousel_product" class="carousel-control-next" data-slide="next">
      <span class="carousel-control-next-icon"></span>
    </a>
    <ol class="carousel-indicators">
      <li
        v-for="(item, index) in lists"
        data-target="#carousel_product"
        :data-slide-to="index"
        :class="{'active':index==0}"
        :style="`background-image: url(${IMG_URL}${item.src})`"
        @click="selected=index"
      ></li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    // 父組件來源
    lists: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  data() {
    return {
      _: this.item,
      IMG_URL: process.env.IMG_URL,
      selected: 0,
      second: 5000
    };
  },
  methods: {
    // 初始
    // 輪播開始
    run_carousel() {
      setTimeout(() => {
        // 只有一張圖片 or 沒有設定秒數
        // if (this.item.image.length == 1 || this.second == 0 ) return;
        //$(".carousel-control-next").click();
        // this.run_carousel();
      }, this.second);
    }
  },

  mounted() {
    // this.second = Number(this.item.second) * 1000 ;
    this.run_carousel();
  }
};
</script>
<style lang="scss" scoped>
.carousel-indicators {
  // top: 100%;
  position: relative;
  margin-right: 0px;
  margin-left: 0px;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  // height: 100px;
  display: flex;
  justify-content: flex-start;
  & li {
    // background-image: url(/images/prod01.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 60px;
    height: 60px;
  }
}
</style>