<template>
  <section class="pt-5 pb-5">
    <!-- TYPE1 -->
    <div class="container">
      <div id="banner-type1" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <template  v-for="( data , i ) in item.image" >
            <li data-target="#banner-type1" :data-slide-to="i" :class="{'active': i == 0 }" ></li>
          </template>
        </ol>
        <div class="carousel-inner">
          <div
            v-for="( data , i ) in item.image"
            class="carousel-item"
            :class="{'active': i == 0 }"
          >
            <img :src="IMG_URL+data.src" class :alt="data.alt" />
          </div>

          <a href="#banner-type1" class="carousel-control-prev" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a href="#banner-type1" class="carousel-control-next" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "",
  props: {
    // 父組件來源
    item: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      _: this.item,
      selected: 0,
      IMG_URL: process.env.IMG_URL
    };
  },
  methods: {
    // 初始
    // 輪播開始
    run_carousel() {
      setTimeout(() => {
        // 只有一張圖片 or 沒有設定秒數
        if (this.item.image.length == 1 || this.second == 0 ) return;
        $('.carousel-control-next').click();
        this.run_carousel();
      }, this.second );
    }
  },

  mounted() {
    this.second = Number(this.item.second) * 1000 ;
    this.run_carousel();
  }
};
</script>
<style lang="scss" scoped>
.carousel-item {
  // display: flex;
  width: 100%;
  height: 300px;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  display: flex;
}
</style>