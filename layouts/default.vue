<template>
  <div>
    <Loading />
    <Headers />
    <nuxt data-aos="fade-up" data-aos-delay="300" />
  </div>
</template>
<script>
import { mapActions , mapMutations } from "vuex";
export default {
  transition: "fadeOpacity",
  middleware: "auth",
  data() {
    return {};
  },
  // 監聽,當路由發生變化的時候執行
  watch: {
    $route(to, from) {
      console.log(to.path);
    }
  },
  methods: {
    // 初始
    ...mapActions({
      _store: "_store",
      get_findCar: "cart/get_findCar",
      _store: "_store"
    }),
    ...mapMutations({
      set_token: "other/set_token"
    }),
  },

  beforeMount: async function() {
    console.log("default>>>>");
    let store = this.$store
    let token = "customer-test" ;
        token = (token)? token : await store.dispatch("other/get_token");
        this.set_token(token)
        // 首頁相關
        let result = await store.dispatch("web/get_website", {
            token: token,
            condition: null
        });
      if (result.data && result.data.length !== 0) {
        // 搜尋該分類的產品列表
        let res = await store.dispatch("ssr/init_layout", {
          layout: result.data[0].layout , 
        });
      }
    // localStorage.clear();
    // let resp = await this.get_findCar({ condition: null });
    // if (resp.code != 200) return;

    // let info = { id: resp.data.car_id, state: resp.data.state };
    // this._store({ act: "cart/set_cart_info", data: info });

    // let data = {};
    // for (let i in resp.data.commodity) {
    //   let res = resp.data.commodity[i];
    //   data[`${res.normal}-${res.sku}`] = res;
    // }

    // this._store({ act: "cart/set_cart", data: data });
    console.log("default end >>>>");
  },
  mounted: async function() {},
  destroyed() {}
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
