<template>
  <section class="pt-5 pb-5">
    <!-- TYPE1 -->
    <div class="container">
      <div :id="`banner-type1-${randID}`" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <template v-for="( data , i ) in item.image">
            <li
              :data-target="`#banner-type1-${randID}`"
              :data-slide-to="i"
              :class="{'active': i == 0 }"
            ></li>
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

          <a :href="`#banner-type1-${randID}`" class="carousel-control-prev" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a :href="`#banner-type1-${randID}`" class="carousel-control-next" data-slide="next">
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
      default: function () {
        return {};
      },
    },
    randID: {
      type: [String, Number],
      default: function () {
        return Math.floor(Math.random() * 10000) + 1;
      },
    },
  },
  data() {
    return {
      _: this.item,
      _: this.randID,
      selected: 0,
      IMG_URL: process.env.IMG_URL,
    };
  },
  methods: {
    // 初始
  },

  mounted() {

    this.second = this.item.second ? Number(this.item.second) * 1000 : 0;
    if (this.second === 0) return;
    $(`#banner-type1-${this.randID}`).carousel({
      interval: this.second,
    });
  },
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