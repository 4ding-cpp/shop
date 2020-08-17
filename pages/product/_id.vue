<template>
  <div id="page">
    <section class="content">
      <div class="container">
        <!-- 麵包屑 -->
        <Breadcrumb :data="breadcrumb_info" />
      </div>
      <div class="container">
        <div class="row">
          <div class="sidebar col-md-2 pt-3 mb-4">
            <Sidebar />
          </div>
          <div class="content col-md-10" v-if="product_info.name">
            <div class="row pt-5 pb-5">
              <!-- 左側圖片導覽 -->
              <div class="col-md-6">
                <section class>
                  <CarouselProduct :lists="product_info.photox" />
                </section>
              </div>
              <div class="col-md-6">
                <div class="product-name">
                  <div class="cart-button">
                    <a href>
                      <i class="far fa-heart"></i>
                    </a>
                  </div>

                  <h4>{{product_info.name.tw}}</h4>
                  <div class="originalPrice">NT{{product_info.price}}</div>
                  <div class="offer">NT{{product_info.reduce}}</div>
                  <br />
                  <div>規格:</div>
                  <div class="row">
                    <div v-for="(o,id) in product_info.specx" class="col-md-4 p-2 mb-3">
                      <ButtonChoice
                        :title="specxName(o.itemx)"
                        :free="false"
                        :active="specx===id"
                        @selected="specx=id"
                      />
                    </div>
                  </div>
                </div>
                <div class="pt-5">
                  <label for>數量:</label>
                  <div class="w-50">
                    <ButtonSubAdd :count.sync="count" />
                  </div>
                  <div class="input-group">
                    <div class="col-md-6 mt-3">
                      <button class="w-100 btn-block pick-btn l-btn" @click="cartJoin()">加入購物車</button>
                    </div>
                    <div class="col-md-6 mt-3">
                      <button class="w-100 checkout-btn l-btn" @click="toStep1();">立即結帳</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- 規格說明 -->
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item" v-for="(item,i) in product_info.link.block">
                <a
                  class="nav-link"
                  :class="{'active':i==0}"
                  data-toggle="tab"
                  :href="'#tab_'+i"
                  :aria-controls="'tab_'+i"
                >{{item.title.tw}}</a>
              </li>
            </ul>
            <div class="tab-content mb-5" id="myTabContent">
              <div
                v-for="(item,i) in product_info.link.block"
                class="tab-pane fade"
                :class="{'active show':i==0}"
                :id="'tab_'+i"
                role="tabpanel"
              >{{item.title.tw}}</div>
            </div>
            <!-- 瀏覽器紀錄 -->
            <div class="history p-2">瀏覽紀錄</div>
            <div class="history-contect mb-5"></div>
            <ul class="nav nav-tabs" id="myTab" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >本分類熱銷</a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >全站方式</a>
              </li>
            </ul>
            <div class="tab-content mb-2" id="myTabContent">
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >AAAAAAAAAAAAAAAAAAAAAAAAAAAA</div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >SSSSSSSSSSSSSSSSSSSSSSSSS</div>
            </div>
          </div>
        </div>
      </div>
      <div class="chat">
        <i class="fas fa-comments"></i>
      </div>
    </section>

    <Footers />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { Struct } from "google-protobuf/google/protobuf/struct_pb";

export default {
  data() {
    return {
      // Breadcrumb
      breadcrumb_info: {},
      product_info: {},
      // 所選擇的產品資訊
      specx: "",
      count: 1,
    };
  },
  async asyncData({ context, app, store, route, redirect }) {
    if (typeof route.params.id !== "string") redirect.go(-1);
    let data = {
      breadcrumb_info: {
        name: "熱門商品",
        key: "product",
        url: "/class/",
        prod: "",
      },
    };

    let cond = Struct.fromJavaScript({
      product_id: route.params.id,
    });
    let result = await store.dispatch("product/get_productDetail", {
      app: app,
      token: store.state.account.token,
      condition: cond,
    });
    if (result.code === 200) {
      data.product_info = result.data;
      data.specx = Object.keys(data.product_info.specx)[0];
      data.breadcrumb_info.url += data.product_info.link.class_id;
      data.breadcrumb_info.prod = data.product_info.name.tw;
    }

    return data;
  },
  watch: {
    //監聽值
  },
  computed: {
    //相依的資料改變時才做計算方法
  },

  created() {},
  methods: {
    // 初始
    ...mapActions({
      loading: "loading",
      get_template: "other/get_template",
      _store: "_store",
    }),
    // get 規格名稱
    specxName(data) {
      let name = "";
      data.forEach((element) => {
        name += element.tw;
      });
      return name;
    },
    cartJoin() {
      let p = this.product_info;
      let data = {
        normal: p.product_id,
        sku: this.specx,
        name: { tw: p.name.tw },
        price: p.reduce,
        photo: {
          src:
            p.photox.length === 0
              ? "/images/noprod.png"
              : `${process.env.IMG_URL}/${p.photox[0].src}`,
        },
        count: this.count,
      };
      this._store({ act: "cart/add_cart", data: data });
      this.$toast.success("加入到購物車");
    },
    toStep1: async function () {
      await this.cartJoin();
      this.$router.push("/cart/step1");
    },
  },
  mounted: async function () {
    //元素已掛載， el 被建立。
    this.loading(false);
    console.log("product_info>>>>", this.product_info);
    // this.get_template('/Csp7Vk3EPg/template/yXxbn5AMuA')
  },
};
</script>

<style lang="scss" scoped >
.shipping-item {
  height: auto;
}
#myTabContent {
  border: 1px solid #e6e6e6;
  border-top: 0px solid #dee2e6;
  padding: 12px;
}
</style>
