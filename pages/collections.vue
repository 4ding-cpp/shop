<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <!-- 麵包屑 -->
        <Breadcrumb  :data="page_info" />
      </div>
      <div class="container">
        <div class="row">
          <div class="sidebar col-md-2 pt-3 mb-4">
            <Sidebar />
          </div>
          <div class="content col-md-10">
            <div class>
              <img src="/images/banner01.png" class="img-fluid" alt="Responsive image" />
            </div>
            <div class>
              <template v-for="(item,i) in product_list">
                <Products :data="item" />
              </template>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footers />
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
export default {
  // layout:"common",
  data: function() {
    // 資料
    return {
      product_list: [], //
      page_info: {
        name: '熱門分類' ,
        key:'product' 
      }
    };
  },
  async asyncData({ context, app, store }) {
    let data = {} ;
  
    let result = await store.dispatch("product/get_product", {
      app: app,
      token: store.state.other.token,
      condition: null
    });
    if(result.code === 200) data.product_list = result.data



    return data;
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
      get_product: "product/get_product"
    }),
    ...mapMutations({
      set_product_list: "product/set_product_list"
    }),
    async test() {}
  },
  //BEGIN--生命週期
  beforeCreate: function() {
    //實體初始化
  },
  created: function() {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
    this.loading(true);
  },
  beforeMount: function() {
    //執行元素掛載之前。
  },
  mounted: async function() {
    //元素已掛載， el 被建立。
    this.loading(false);
  },
  beforeUpdate: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  updated: function() {
    //當資料變化時被呼叫，還不會描繪 View。
  },
  beforeDestroy: function() {
    //實體還可使用。
  },
  destroyed: function() {
    //實體銷毀。
  }
  //END--生命週期
};
</script>

<style >
</style>
