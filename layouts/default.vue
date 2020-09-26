<template>
  <div id="main" :style="{'background-color':style.config.background}" >
    <!-- <PlugGtm />
    <PlugFbPixel /> -->
    <Loading />
    <Headers />
    <nuxt  data-aos="fade-up" data-aos-delay="300" :style="{'background-color':style.config.background}" />
  </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  transition: "fadeOpacity",
  middleware: "auth",
  data() {
    return {
      app_id: "",
      style: {
        config: {},
      },
    };
  },
  // 監聽,當路由發生變化的時候執行
  watch: {},
  methods: {
    // 初始
    ...mapActions({
      _store: "_store",
      loading: "loading",
    }),
    ...mapGetters({
      get_styleColor: "web/get_styleColor",
    }),
  },

  beforeMount: async function () {},
  async created() {
    this.style.config = this.get_styleColor();
  },
  mounted: function () {
    $("html").css("background", this.style.config.background);
  },
  destroyed() {},
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.fadeOpacity-enter-active,
.fadeOpacity-leave-active {
  transition: opacity 0.35s ease-out;
}

.fadeOpacity-enter,
.fadeOpacity-leave-active {
  opacity: 0;
}
</style>
