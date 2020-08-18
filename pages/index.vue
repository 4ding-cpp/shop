<template>
  <div id="page">
    <section class="content">
      <div v-for="(item,i) in layout">
        <component :is="'IndexLayout'+item.type" :item.sync="item" :randID="i" ></component>
      </div>
    </section>
    <Footers />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  // layout:"common",
  data: function () {
    // 資料
    return {
      layout: this.$store.state.web.home.layout, //
    };
  },

  async asyncData({ context, app, store }) {
  },
  async fetch({ store, $axios, app }) {},
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
    }),
    ...mapMutations({
      set_product_list: "product/set_product_list",
    }),
    async test() {},
  },
  //BEGIN--生命週期
  beforeCreate: function () {
    //實體初始化
  },
  created: async function () {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
    this.loading(true);
  },
  beforeMount: function () {
    //執行元素掛載之前。
  },
  mounted: async function () {
    //元素已掛載， el 被建立。
    this.loading(false);
  },
  beforeUpdate: function () {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function () {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function () {
    //實體還可使用。
  },
  destroyed: function () {
    //實體銷毀。
  },
  //END--生命週期
};
</script>

<style >
</style>
