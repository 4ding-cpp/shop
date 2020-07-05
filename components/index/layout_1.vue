<template>
  <section>
    <div id="BannerAd" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div
          v-for="( data , i ) in item.image"
          class="carousel-item"
          :class="{'active': i == selected }"
        >
          <img :src="IMG_URL+data.src" class :alt="data.alt" />
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
        if (this.item.image.length == 1) return;

        this.selected =
          this.item.image.length == this.selected + 1 ? 0 : this.selected + 1;
        this.run_carousel();
      }, 5000);
    }
  },

  created() {
    // this.run_carousel();
  }
};
</script>
<style lang="scss" scoped>
.carousel-item{
  display: flex;
  width: 100%;
  height: 300px;
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin:auto;
}
</style>