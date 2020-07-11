<template>
  <section class="container">
    <!-- todo 寬1200*600 -->
    <div id="bannerAds" class="carousel slide">
      <ol class="carousel-indicators">
        <li
          data-target="#bannerAds"
          v-for="( data , i ) in item.prod"
          :data-slide-to="i"
          :class="{'active': i == selected }"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          v-for="( data , i ) in item.prod"
          class="carousel-item images-frame"
          :class="{'active': i == selected }"
        >
          <!-- <img src="~/assets/images/banner02.jpg" class="d-block w-100" alt="..." /> -->
          <!-- <img :src="IMG_URL+data.photox[0].src" class="d-block w-100" :alt="data.alt" /> -->
          <div :style="'background-image:url('+IMG_URL+data.photox[0].src+');'" class="images-pic" ></div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#bannerAds" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#bannerAds" role="button" data-slide="next">
        <span class="carousel-control-next-icon"></span>
        <span class="sr-only">Next</span>
      </a>
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
        if (this.item.image.length == 1) return;

        this.selected =
          this.item.image.length == this.selected + 1 ? 0 : this.selected + 1;
        this.run_carousel();
      }, 5000);
    }
  },

  created() {
    // this.run_carousel();
    console.log("layout2:>>>>", this.item);
  }
};
</script>

<style lang="scss" scoped>
// .images-frame {
//   background-color: #eee;
//   height: 200px;
//   width: 100%;
//   text-align: center;

//   /* Firefox, Chrome */
//   line-height: 200px;

//   /* IE */
//   font-size: 180px; /* 200px * 0.9 = 180px */
//   font-family: Arial;
// }
// .images-pic{
//   width: 100%;
//   height: 100%;
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
// }
// img {
//   vertical-align: middle;
//   // width: auto;
//   // height: auto;
//   // max-width: 100%;
//   // max-height: 100%;
//   // margin:auto;
// }
</style>