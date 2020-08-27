<template>
  <section class="container">
    <!-- todo 寬1200*600 -->
    <div :id="`carouselPic-type5-${randID}`" class="carousel slide">
      <ol class="carousel-indicators">
        <li
          :data-target="`#carouselPic-type5-${randID}`"
          v-for="( data , i ) in item.image"
          :data-slide-to="i"
          :class="{'active': i == selected }"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div
          v-for="( data , i ) in item.image"
          class="carousel-item images-frame"
          :class="{'active': i == selected }"
        >
          <div :style="'background-image:url('+IMG_URL+data.src+');'" class="images-pic"></div>
          <!-- <img :src="IMG_URL+data.src" class="d-block w-100" :alt="data.alt" /> -->
        </div>
      </div>
      <a
        class="carousel-control-prev"
        :href="`#carouselPic-type5-${randID}`"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        :href="`#carouselPic-type5-${randID}`"
        role="button"
        data-slide="next"
      >
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

  created() {
    // this.run_carousel();
    // console.log(this.item);
     console.log("type5:",this.item)
  },
};
</script>