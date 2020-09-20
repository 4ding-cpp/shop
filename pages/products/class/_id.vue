<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <!-- 麵包屑 -->
        <Breadcrumb :data="page_info" />
        <div class="row">
          <div class="col-md-12">
            <img
              alt="電動修鬍"
              height="auto"
              src="//7627.cyberbiz.tw/s/files/7627/ckeditor/pictures/content_357fbb76-ca03-4a48-b287-b48c5b737138.jpg"
              width="100%"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="sidebar col-md-3 pt-3 mb-4">
            <Sidebar />
          </div>
          <div class="content col-md-9 pt-3 mb-4">
            <div class="section-heading">
              <h5 class>
                <span>{{title}}</span>
              </h5>
            </div>
            <!-- <div class>
              <img src="/images/banner01.png" class="img-fluid" alt="Responsive image" />
            </div>-->
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
  data: function () {
    // 資料
    return {
      product_list: [], //
      page_info: {},
      title:""
    };
  },
  async asyncData({ context, app, store, route }) {
    let data = {
      page_info: {
        name: "分類",
        url: "/products/class/?prod=所有商品",
        prod: route.query.prod,
      },
    };
    // 搜尋該分類的產品列表
    let cond = null;
    if (route.params.id !== undefined) {
      cond = new app.sqlpb.Condition();
      cond.setO(10).setV(route.params.id);
    }

    let result = await store.dispatch("product/get_product", {
      app: app,
      token: store.state.account.token,
      condition: cond,
    });

    if (result.code === 200) data.product_list = result.data;

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
    }),
    async test() {},
  },
  //BEGIN--生命週期
  beforeCreate: function () {
    //實體初始化
  },
  created: function () {
    //實體建立完成。資料 data 已可取得，但 el 屬性還未被建立。
    this.loading(true);
  },
  beforeMount: function () {
    //執行元素掛載之前。
  },
  mounted: async function () {
    //元素已掛載， el 被建立。
    this.loading(true);
    this.title = this.$route.query.prod ;
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

<style  lang="scss" scoped>
.section-heading {
  margin: 20px 0;
  position: relative;
  padding-left: 15px;
  font-weight: 400;
  & h5 {
    margin: 0px;
  }
  &:after {
    content: "";
    display: table;
    clear: both;
  }
  &:before {
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    border-left: 3px solid #000000;
    left: 0px;
  }
}
</style>
